const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const CelebrityModel = mongoose.model("celebrity", celebritySchema);

module.exports = CelebrityModel;
