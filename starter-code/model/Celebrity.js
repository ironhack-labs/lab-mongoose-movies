const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: {
    type: String,
    default: "Unknow",
  },
  catchPhrase: String,
});

const CelebrityModel = mongoose.model("celebrity", celebritySchema);
module.exports = CelebrityModel;
