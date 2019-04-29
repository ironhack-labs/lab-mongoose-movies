// models/celebrity.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebrityModel = new Schema({
  name: String,
  occupation: String,
  catchphrase: String
//  }, 
//  {
//   timestamps: {
//     createdAt: "created_at",
//     updatedAt: "updated_at"
//    }

});

const Celebrity = mongoose.model("Celebrity", celebrityModel);

module.exports = Celebrity;