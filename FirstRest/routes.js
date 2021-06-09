//initialize express router
let router = require('express').Router();

//Import product Controller
var productController = require('./productController');


//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Export API routes
module.exports = router;


// product routes
router.route('/product')
    .get(productController.index)
    .post(productController.add);
router.route('/product/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);

//Export API routes
module.exports = router;