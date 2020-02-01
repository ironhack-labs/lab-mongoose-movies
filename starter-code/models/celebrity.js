// Requiero mongoose

const mongoose = require("mongoose");

// Aquí creo el Schema (Cómo voy a pasar los datos)

const schema = new mongoose.Schema(
  {
    name: String,
    ocuppation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("celebrity", schema);
