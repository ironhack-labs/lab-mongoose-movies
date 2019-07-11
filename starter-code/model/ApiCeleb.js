const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ApiSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const ApiModel = mongoose.model("ApiSchema", ApiSchema);

module.exports = ApiModel;
