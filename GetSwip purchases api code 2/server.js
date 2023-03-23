
const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
// parse requests of content-type - application/json
app.use(express.json());

//   cors
var corsOptions = {
    origin: "http://localhost:8081"
  };
  app.use(cors(corsOptions));

const db = require("./app/models");
// db
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to purchase landing page." });
});

// all routes
require('./app/routes/vendorDetails.routes')(app);
require('./app/routes/productDetails.routes')(app);
require('./app/routes/bankDetails.routes')(app)
const PORT = process.env.PORT || 8080;
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});