/* eslint-disable no-dupe-keys */
const  connectDB  = require ('./db/db');
const  Product   = require('./model/productModel');


// import { connectDB } from "./db/db";
// import { Product } from './model/productModel';
connectDB()

 const Products = [
    {
        name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 1950,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing",
        category: "Men",
        image:"https://image.shutterstock.com/image-vector/blue-polo-shirt-icon-isolated-260nw-496032655.jpg"
    }
]

function main() {
    Products.forEach(async (product) => {
        const newProduct = new Product(product)

        await newProduct.save((err) => {
            if(err) {
                console.log('failed to seed')
            }
        })
    })
}
main()