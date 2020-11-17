const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
})

const Celebrity = mongoose.model('Celebrity', celebritySchema); 

module.exports = Celebrity; 