const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

//Exporta, declaramos un modelo y "Book" es la tabla y el otro es el Schema
module.exports = mongoose.model("CelebrityTable", celebritySchema);