/* eslint-disable no-unused-vars */
require("dotenv").config();
let express = require("express");
var cors = require("cors");
const userRoutes = require("./routes/userRoutes");
let app = express();
app.use(cors());

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

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
});
