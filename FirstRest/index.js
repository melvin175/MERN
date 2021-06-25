/* eslint-disable no-unused-vars */
require("dotenv").config();
let express = require("express");
let app = express();

//import mongoose
// let mongoose = require("mongoose");

const { add } = require("./controller/productController");

// eslint-disable-next-line no-undef
var port = process.env.PORT || 8080;
var connectDB = require("./db/db");
app.use(express.json());

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"));

// Launch app to the specified port
app.listen(port, function () {
  console.log("Running FirstRest on Port " + port);
  connectDB();
});

//Import routes
let apiRoutes = require("./routes/routes");

//Use API routes in the App
app.use("/api", apiRoutes);

//connect to mongoose
// const dbPath = 'mongodb://localhost/firstrest';
// const options = {useNewUrlParser: true, useUnifiedTopology: true}
// const mongo = mongoose.connect(dbPath, options);
// mongo.then(() => {
//     console.log('connected');
// }, error => {
//     console.log(error, 'error');
// })
