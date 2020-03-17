const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema(
  {
  name: {type: String,unique: true, required: true},
  occupation: {type: String},
  catchPhrase: {type: String},
  image: {type: String},
  },{
  timestamps: true 
  }
)

const Celebrity = mongoose.model("Celebrity", celebritiesSchema)
module.exports = Celebrity;