const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebSchema = new Schema({
    name: {type: String},
    Occupation: {type: String},
    Phrase: {type: String},
  })

const Celeberty = mongoose.model('celeberty', CelebSchema);
module.exports = Celeberty
