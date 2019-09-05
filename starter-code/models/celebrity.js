const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String },
  occupation: String,
  catchPhrase: String
});

const celebrityModel = mongoose.model("celebrity", celebritySchema);
module.exports = celebrityModel;
