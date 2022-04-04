// const asyncHandler = require("express");
// const User = require("../model/userModel");

// exports.index = async function (req, res) {
//   const allUser = await User.find({});
//   res.json({
//     User: allUser,
//   });
// };

const registerUser = async (req, res) => {
  const { username, email, password, pic } = req.body;

  // const userExists = await User.findOne({ email });

  // if (userExists) {
  //   res.status(400);
  //   throw new Error("User already Exists");
  // }

  // const user = await User.create()({
  //   username,
  //   email,
  //   password,
  //   pic,
  // });

  // if (user) {
  //   res.status(201).json({
  //     _id: user._id,
  //     username: user.username,
  //     email: user.email,
  //     pic: user.pic,
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Error Occured!");
  // }

  res.json({
    username,
    email,
    password,
    pic,
  });
};

module.exports = { registerUser };
