var mongoose = requore('mongoose');


//schema
var productSchema = mpngoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


//Export Product Model
var Product = module.exports = mongoose.model('product' , productSchema) ;

module.exports.get = function (callback, limit)  {
    Product.find(callback).limit(limit); 

}