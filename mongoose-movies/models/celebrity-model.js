const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const celebSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name']
  },
  occupation: {
    type: String,
    required: [true, 'Please enter an occupation']
  },
  catchPhrase: {
    type: String,
    required: [true, 'Please enter a catch phrase']
  }
});


const Celebrity = mongoose.model('Celebrity', celebSchema);


module.exports = Celebrity;
