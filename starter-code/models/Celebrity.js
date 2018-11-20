// this is the model-schema to build the database, it establishes all the information each document will have.



const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  image: String
});

const Celeb = mongoose.model("Celeb", celebSchema);
// const ^^^^Celeb is also mentioned in the seeds file
module.exports = Celeb;