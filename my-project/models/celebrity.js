const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// the schema defines the structure of documents in this collection
const celebritySchema = new Schema({
  // name of the Celebrity
  name: {
    type: String
  },

  // occupation of the Celebrity
  occupation: {
    type: String
  },

  // catchPhrase of the Celebrity
  catchPhrase: {
    type: String
  }
});

// the model has the methods to make database queries
const CelebirtyModel = mongoose.model("Celebrity", celebritySchema);

module.exports = CelebirtyModel;
