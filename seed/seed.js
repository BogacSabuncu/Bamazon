const db = require("../models");
const products = require("./products");

db.sequelize.sync({ force: true }).then(function () {

    return db.Product.bulkCreate(products);
    
}).then(function(){
    console.log("Seed completed!")
    db.sequelize.close();
});