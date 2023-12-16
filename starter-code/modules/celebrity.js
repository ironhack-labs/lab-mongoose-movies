const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const celebritySchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String, 
  favoriteBooks: [{
    type: ObjectId,
    ref: 'Movie',
  }]
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

