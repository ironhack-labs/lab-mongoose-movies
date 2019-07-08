const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: {type:Array},
});

const celebModel = mongoose.model("celebSchema", celebSchema);

module.exports = celebModel;
