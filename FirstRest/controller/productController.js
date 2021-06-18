//Import Product Model 
const Product = require('../model/productModel')

//For index
exports.index = async function (req, res) {
    // Product.get (function (err, product){
    //     if(err) 
    //     res.json({
    //         status: "error",
    //         message: err
    //     });
    //     res.json({
    //         status: "success",
    //         mesage: "Got the product successfully",
    //         array: product
    //     });
    // });

    const allProducts = await Product.find({
        
    })
    res.json({
        array: allProducts
    })
};


//For creating new product
exports.add = function (req, res) {
    const {name, price, description, image} = req.body;
    const product = new Product({
        name, price, description, image
});


//Save and check error
 product.save(function (err) {
    if (err) 
        res.json(err);
    res.json({
        message: "New  Bio Added!",
        array: product
    });
 });
};


//View Product
exports.view = function (req, res) {
    Product.findById(req.params.product_id,  function (err, product) {
        if (err)
            res.send(err);
        res.json({
        message: 'Product details',
        array: product
        });
    });
}

//Update product
exports.update = function (req, res) {
    Product.findById(req.params.product_id, function (err, bio){
        if(err)
            res.send(err);
        product.name = req.body.name ? req.body.name : bio.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image = req.body.image;


        //Save and check for errors
        product.save(function (err) {
            if(err)
                res.json(err)
            res.json({
                message: "Product updated successfully",
                array: product
            });
        });
    });
};

//Delete Product
exports.delete = function (req, res) {
    Product.deleteOne({
        _id: req.params.product_id
    }, function (err, contact) {
        if (err)
        res,json({
            status: "success",
            mesage: 'Product deleted' 
        });
    });
};