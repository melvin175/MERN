const { registerUser } = require("../controller/userController");

let router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    status: "API Works",
    message: "Welcome to user api",
  });
});

router.route("/").post(registerUser);

module.exports = router;
