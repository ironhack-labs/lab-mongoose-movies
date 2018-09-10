const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: {type: String, required: true},
  occupation: String,
  catchphrase: String,
});


const Celeb = mongoose.model("Celeb", celebritySchema);


module.exports = Celeb;