const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema({

  name: String, 

  occupation: {
    type: String,
    enum: ['actor', 'comedian', 'singer', 'unknown']
  }, 

  catchPhrase: String,

});

const Celebrity = mongoose.model('Celebrity', celebritiesSchema);

module.exports = Celebrity;