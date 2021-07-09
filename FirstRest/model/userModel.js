var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});

module.exports = userModel;
