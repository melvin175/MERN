const { registerUser } = require("../controller/userController");
const express = require("express");
const router = express.Router();

// router.get("/", function (req, res) {
//   res.json({
//     status: "API Works",
//     message: "Welcome to user api",
//   });
// });

router.route("/users").post(registerUser);

module.exports = router;
