//Import Product Model 
Product = require('./productModel')

//For index
exports.index = function (req, res) {
    product.get (function (err, product){
        if(err) 
        res.json({
            status: "error",
            message: err
        });
        res.json({
            status: "success",
            mesage: "Got the product successfully"
        });
    });
};