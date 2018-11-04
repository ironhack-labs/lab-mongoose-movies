const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const celebertySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celeberty = mongoose.model("celeberty", celebertySchema)

module.exports = Celeberty;