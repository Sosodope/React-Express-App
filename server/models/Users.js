// ServerPort.js

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Users = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("Users", Users);
