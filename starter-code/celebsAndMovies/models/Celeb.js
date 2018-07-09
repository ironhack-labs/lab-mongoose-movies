
// in the example code the line below is not commented but I dont think it is needed because it is called in app.js
const mongoose = require("mongoose");

const Schema   = mongoose.Schema;


const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celeb = mongoose.model("Celeb", celebSchema);

module.exports = Celeb;