const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String,
});

const CelebrityModel = mongoose.model("celebrity", celebritySchema);

module.exports = CelebrityModel;
