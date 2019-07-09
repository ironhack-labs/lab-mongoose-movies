const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String },
  catchPhrase: { type: String }
});

const Celeb = mongoose.model("Celeb", celebSchema);
module.exports = Celeb;
