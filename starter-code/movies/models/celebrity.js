const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String
});

const Celeb = mongoose.model("Celeb", celebSchema);
module.exports = Celeb;
