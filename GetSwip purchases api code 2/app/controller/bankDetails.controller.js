const db = require("../models");
const axios = require('axios')
const bank_Details = db.bankDetails;
const Op = db.Sequelize.Op;

// Create and Save a new Bank Details
exports.create = (req, res) => {
  // Validate request

  if (
    !req.body.bank_ac_no &&
    !req.body.ifsc_code &&
    !req.body.bank_name &&
    !req.body.branch_name
  ) {
    res.status(400).send({
      message:
        "Content can not be empty! pls insert (bank ac no, ifsc code, bank name, branch name)",
    });
    return;
  }

  // Create a Bank Details
  const Bank = {
    bank_ac_no: req.body.bank_ac_no,
    ifsc_code: req.body.ifsc_code,
    bank_name: req.body.bank_name,
    branch_name: req.body.branch_name,
    upi: req.body.upi ? req.body.upi : "",
    notes: req.body.notes ? req.body.notes : "",
    default: req.body.default ? req.body.default : false,
  };

  // Save Bank Details in the database
  bank_Details
    .create(Bank)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bank Details.",
      });
    });
};

// Retrieve all Bank Details from the database.
exports.findAll = (req, res) => {
  const bank_ac_no = req.query.bank_ac_no;
  var condition = bank_ac_no
    ? { bank_ac_no: { [Op.like]: `%${bank_ac_no}%` } }
    : null;

  bank_Details
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Bank Details.",
      });
    });
};


// Update a Bank Details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  bank_Details
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Bank Details was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Bank Details with id=${id}. Maybe Bank Details was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Bank Details with id=" + id,
      });
    });
};



// Find all Default
exports.findAllDefault = (req, res) => {
  bank_Details
    .findAll({ where: { default: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Bank Details.",
      });
    });
};

/* // get details using ifsc
exports.getifsc =(req,res)=>{
axios.get('https://ifsc.razorpay.com/')
  .then(response => {
    const data = response.data;
    fetch_ifsc.bulkCreate(data)
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch(error => {
        console.error('Error saving data: ', error);
      });
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  })}; */
