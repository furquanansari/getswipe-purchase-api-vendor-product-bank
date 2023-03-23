module.exports = app => {
    const bankDetails = require("../controller/bankDetails.controller.js");
  
    var router = require("express").Router();
  
    // Create a new bank details
    router.post("/", bankDetails.create);
  
    // Retrieve all bank details
    router.get("/", bankDetails.findAll);
  
    // Retrieve all Default 
    router.get("/default", bankDetails.findAllDefault);

    // Update a product details with id
    router.put("/:id", bankDetails.update);

/*     // get ifsc data
    router.get('/:ifsc',bankDetails.getifsc); */
  
    app.use('/api/bankDetails',router);
  };