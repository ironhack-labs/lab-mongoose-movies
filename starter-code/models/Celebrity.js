const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchemas = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})


const Celebrity = mongoose.model("Celebrity", celebritySchemas);
module.exports = Celebrity;