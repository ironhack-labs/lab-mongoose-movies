const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrityModel = new Schema({
  name : String,
  occupation : String,
  catchPhrase : String
});

const CelebrityModel = mongoose.model("celebrity", celebrityModel);
module.exports = CelebrityModel;