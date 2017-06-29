const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: { type: String},
  occupation: {type: String },
  catchPhrase: { type: String },
});

const celebModel = mongoose.model('celebs', celebSchema);


module.exports = celebModel;
