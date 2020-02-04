const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
  Name: String,
  Occupation: String,
  Catchphrase: String
});

const Celeb = mongoose.model("Celeb", celebSchema);

module.exports = Celeb;
