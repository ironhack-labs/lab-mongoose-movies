const mongoose = require('mongoose');

const Review = require ('./movies-model.js');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
    type: String,
    required: [true, 'Please, provide a Celebrity name.'],
    maxLength: 40
  },
  occupation: {
    type: String,
    required: [true, 'Please, provide the celebrities occupation.'],
    maxLength: 40
  },
  catchPhrase: {
    type: String,
    required: [true, 'Please, provide the celebrities catch phrase.'],
    maxLength: 40
  },
});

/////////////////////       name of the model , Schema how to define the model
////////////////////////               |     ,       |
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
