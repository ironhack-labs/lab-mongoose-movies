
//Calling Mongoose package
const mongoose = require("mongoose");

//Setting up schema for model
const Schema   = mongoose.Schema;


  const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
  })


  //Model below, rules for model are above
  const Celebrities = mongoose.model("Celebrities", celebritySchema);


  //Exporting Celebrity Model for use in app
  module.exports = Celebrities;