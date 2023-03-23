module.exports = app => {
    const vendorDetails = require("../controller/vendorDetails.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vendor details
    router.post("/", vendorDetails.create);
  
    // Retrieve all vendor details
    router.get("/", vendorDetails.findAll);
  
    // Retrieve all tds 
    router.get("/tds", vendorDetails.findAllTDS);
  
    // Retrieve a single vendor details with id
    router.get("/:id", vendorDetails.findOne);
  
    // Update a vendor details with id
    router.put("/:id", vendorDetails.update);
  
    // Delete a vendor details with id
    router.delete("/:id", vendorDetails.delete);
  
    // Delete all vendor details
    router.delete("/", vendorDetails.deleteAll);
  
    app.use('/api/vendorDetails',router);
  };