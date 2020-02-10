const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  ocupation: String,
  catchPhrase: {
    type: String, required: true
  }
  }, {
    timestamps: true
  }
);

const Model = mongoose.model('Celebrities', schemaName);
module.exports = Model;