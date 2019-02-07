const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: { type: String, require: true },
  occupation: { type: String },
  catchPrase: {
    type: String
  }
});

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;
