const db = require("../models");
const vendor_Details = db.vendorDetails;
const Op = db.Sequelize.Op;

// Create and Save a new Vendor Details
exports.create = (req, res) => {
    // Validate request
 
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Vendor Details
    const Vendor = {
      name: req.body.name,
      dial_code: req.body.dial_code ? req.body.dial_code : '+91',
      phone: req.body.phone ? req.body.phone : null,
      email: req.body.email ? req.body.email : ' ',
      cc_email: req.body.cc_email ? req.body.cc_email : ' ',
      gstin: req.body.gstin ? req.body.gstin : null,
      company_name: req.body.company_name ? req.body.company_name : ' ',
      address_line1: req.body.address_line1 ? req.body.address_line1: ' ',
      address_line2: req.body.address_line2 ? req.body.address_line2: ' ',
      city: req.body.city ? req.body.city: ' ',
      state: req.body.state ? req.body.state: ' ',
      pincode: req.body.pincode ? req.body.pincode: null,
      notes: req.body.notes ? req.body.notes: ' ',
      tags: req.body.tags ? req.body.tags: ' ',
      tds: req.body.tds ? req.body.tds: false,
      linked_customer: req.body.linked_customer ? req.body.linked_customer: null,
      opening_balance_type: req.body.opening_balance_type ? req.body.opening_balance_type: 0,
      opening_balance: req.body.opening_balance ? req.body.opening_balance: null,
      balance: req.body.balance ? req.body.balance: null,
    
    };
  
    // Save Vendor Details in the database
    vendor_Details.create(Vendor)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Vendor Details."
        });
      });
  };

// Retrieve all Vendor Details from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    
  
    vendor_Details.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vendor Details."
        });
      });
  };

// Find a single Vendor Details with a vendor_id
exports.findOne = (req, res) => {
    const id= req.params.id;
  
    vendor_Details.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Vendor Details with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Vendor Details with id=" + id
        });
      });
  };

// Update a Vendor Details by the vendor_id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    vendor_Details.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vendor Details was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Vendor Details with id=${id}. Maybe Vendor Details was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vendor Details with id=" + id
        });
      });
  };

// Delete a Vendor Details with the specified vendor_id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    vendor_Details.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vendor Details was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Vendor Details with vendor_id=${id}. Maybe Vendor Details was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vendor Details with vendor_id=" + id
        });
      });
  };
  

// Delete all Vendor Details from the database.
exports.deleteAll = (req, res) => {
    vendor_Details.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Vendor Details were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Vendor Details."
        });
      });
  };

// Find all TDS
exports.findAllTDS = (req, res) => {
    vendor_Details.findAll({ where: { tds: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vendor Details."
        });
      });
  };

