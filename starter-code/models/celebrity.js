const mongoose = require("mongoose");



//A schema gives our database structure.
const celebritySchema = new mongoose.Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  }//añadir timestamps
);

module.exports = mongoose.model("Celebrity", celebritySchema);