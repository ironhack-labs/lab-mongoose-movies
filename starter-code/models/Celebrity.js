const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchphrase: String,
});

const celebrityModel = mongoose.model("Celebrity", celebritySchema);

module.exports = celebrityModel;
