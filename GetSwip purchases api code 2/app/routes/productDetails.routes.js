module.exports = app => {
    const productDetails = require("../controller/productDetails.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product details
    router.post("/", productDetails.create);
  
    // Retrieve all product details
    router.get("/", productDetails.findAll);
  
    // Retrieve all Online 
    router.get("/show_online", productDetails.findAllOnline);

    // Retrieve all Not_for_Sale
    router.get("/not_for_sale",productDetails.findAllNotSale)
  
    // Retrieve a single product details with id
    router.get("/:id", productDetails.findOne);
  
    // Update a product details with id
    router.put("/:id", productDetails.update);
  
    // Delete a product details with id
    router.delete("/:id", productDetails.delete);
  
    // Delete all product details
    router.delete("/", productDetails.deleteAll);
  
    app.use('/api/productDetails',router);
  };