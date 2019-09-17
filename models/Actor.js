const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorSchema = new Schema({
  name: String,
  nominations: Array,
  awards: Array,
  quote: String,
  image: String,
});

const Actor = mongoose.model("Actor", actorSchema);

module.exports = Actor;
