const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  ocuppation: {
   type: String,
   default: 'unknown'
  },
  catchPhrase: String
});

module.exports = mongoose.model('Celebs', celebSchema);