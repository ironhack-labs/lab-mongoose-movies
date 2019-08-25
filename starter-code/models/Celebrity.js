const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebratyEvent = new Schema({
  name: { type: String },
  occupation: { type: String },
  cathPhrase: { type: String },
});

const Celebraty = mongoose.model('celebraty', celebratyEvent);

module.exports = Celebraty;
