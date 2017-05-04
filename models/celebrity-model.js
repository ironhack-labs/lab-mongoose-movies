const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const celebritySchema = new Schema({
  name: {
    type: String,
    required: [true, 'All artists have a name.'],
    minlength: [1, ''],
    maxlength: [100, 'Maimum length for a name is 100.']
  },
  occupation: {
    type: String,
    required: [true, 'All artists have an occupation.'],
    minlength: [1, ''],
    maxlength: [100, 'Maimum length for occupation is 100.']
  },
  catchPhrase: {
    type: String,
    required: [true, 'All artists have a name.'],
    minlength: [1, ''],
    maxlength: [100, 'Maimum length for a catch phrase is 100.']
  },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;
