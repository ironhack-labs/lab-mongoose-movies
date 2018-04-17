const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name:        { type: String},
  occupation:  { type: String},
  catchPhrase: { type: String},  
},
// second argument;
{
  timestamps: true
}
);

const Celebrity = mongoose.model("Celebrity", celebritySchema); // celebritySchema in the () --> celebrity --> celebrities in dataBase.

module.exports = Celebrity;

