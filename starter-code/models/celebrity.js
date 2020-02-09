const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celebModel = mongoose.model("Celebrity", celebSchema);

module.exports = celebModel;

