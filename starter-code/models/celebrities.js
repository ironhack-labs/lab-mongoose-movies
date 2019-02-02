const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
//Build Celebrity Schema
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
}, {
  //Keep record on when document is created or updated
  timestamps: true
});
//Make Celebrity a mongoose model
const Celebrity = mongoose.model("Celebrity", celebritySchema);

//Export Author Module to make it available in other files 
module.exports =  Celebrity;

