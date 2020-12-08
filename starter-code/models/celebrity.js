const { __express } = require('hbs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type:String,
    required: true,
  },
  catchPhrase: {
    type: String,
  },
});

const celebrity = mongoose.model('celebrities', celebritySchema);

module.exports = celebrity;
