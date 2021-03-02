const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CelebrityModel = require("./celebrity")

const CelebritySchema = new Schema({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  },
});

const CelebrityModel = mongoose.model("celebrity.js", CelebritySchema);
module.export = CelebrityModel;