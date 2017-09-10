const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//generamos un modelo mongoose para crear en la base de datos.
const celebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrities = mongoose.model("celebrities", celebritiesSchema);

module.exports = Celebrities;
