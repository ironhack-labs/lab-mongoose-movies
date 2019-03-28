const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
 name:{type: String, unique: true},
 occupation: String,
 catchPhrase:String
  });

module.exports =  mongoose.model("Celebrity", celebritySchema);