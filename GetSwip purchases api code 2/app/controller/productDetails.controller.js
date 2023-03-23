const db = require("../models");
const product_Details = db.productDetails;
const Op = db.Sequelize.Op;

// Create and Save a new Product Details
exports.create = (req, res) => {
    // Validate request
 
    if (!req.body.item_name && !req.body.selling_price) {
      res.status(400).send({
        message: "Content can not be empty! pls insert both value item_name and selling_price"
      });
      return;
    }
  
    // Create a Vendor Details
    const Product = {
      item_type: req.body.item_type ? req.body.item_type : 'Product',
      item_name: req.body.item_name,
      selling_price: req.body.selling_price,
      price_unit: req.body.price_unit ? req.body.price_unit : ' ',
      barcode: req.body.barcode ? req.body.barcode : null,
      purchase_price_tax: req.body.purchase_price_tax ? req.body.purchase_price_tax : null,
      purchase_price_no_tax: req.body.purchase_price_no_tax ? req.body.purchase_price_no_tax : null,
      hsn: req.body.hsn ? req.body.hsn: ' ',
      desc: req.body.desc ? req.body.desc: ' ',
      category: req.body.category ? req.body.category: ' ',
      product_image: req.body.product_image ? req.body.product_image: ' ',
      show_online: req.body.show_online ? req.body.show_online: false,
      not_for_sale: req.body.not_for_sale ? req.body.not_for_sale: false,
      opening_qty: req.body.opening_qty ? req.body.opening_qty: null,
      opening_purchase_price: req.body.opening_purchase_price ? req.body.opening_purchase_price: null,
      opening_stock_price: req.body.opening_stock_price ? req.body.opening_stock_price: null,
      discount_percent: req.body.discount_percent ? req.body.discount_percent: null,
      discount_amount: req.body.discount_amount ? req.body.discount_amount: null,
      show_discount_in: req.body.show_discount_in ? req.body.show_discount_in: false,
      mini_stock_value: req.body.mini_stock_value ? req.body.mini_stock_value:null
    };
  
    // Save Product Details in the database
    product_Details.create(Product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product Details."
        });
      });
  };

// Retrieve all Product Details from the database.
exports.findAll = (req, res) => {
    const item_name = req.query.item_name;
    var condition = item_name ? { item_name: { [Op.like]: `%${item_name}%` } } : null;
    
  
    product_Details.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Product Details."
        });
      });
  };

// Find a single Product Details with an id
exports.findOne = (req, res) => {
    const id= req.params.id;
  
    product_Details.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Product Details with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Product Details with id=" + id
        });
      });
  };

// Update a Product Details by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    product_Details.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product Details was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product Details with id=${id}. Maybe Product Details was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product Details with id=" + id
        });
      });
  };

// Delete a Product Details with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    product_Details.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product Details was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Product Details with id=${id}. Maybe Product Details was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product Details with id=" + id
        });
      });
  };
  

// Delete all Product Details from the database.
exports.deleteAll = (req, res) => {
    product_Details.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Product Details were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Product Details."
        });
      });
  };

// Find all Show Online Store
exports.findAllOnline = (req, res) => {
    product_Details.findAll({ where: { show_online: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Product Details."
        });
      });
  };

  // Find all Not for Sale
exports.findAllNotSale = (req, res) => {
  product_Details.findAll({ where: { not_for_sale: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Product Details."
      });
    });
};