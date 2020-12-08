const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  { timestamps: true }
);
const CelebrityModel = mongoose.model("celebrities", celebritySchema);

module.exports = CelebrityModel;