var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userModel = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default: "https://image.flaticon.com/icons/png/512/1077/1077114.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userModel;
