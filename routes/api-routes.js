// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/products", function(req, res){
        let query = {};
        
        db.Product.findAll({ }).then(function(dbProducts){
            res.json(dbProducts);
        });
    });

 
    app.put("/api/buyitem/:id", function(req, res){
        db.Product.decrement("stock_quantity",
            {where:{
                id : req.params.id
            }}
        ).then(function(dbProducts){
            res.json(dbProducts);
        });

    });
};