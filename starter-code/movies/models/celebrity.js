const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/movies',  {useMongoClient: true});

const celebSchema = new Schema({
  name        : {type: String},
  occupation  : {type: String},
  catchPhrase : { type: String}
});

const Celebrity = mongoose.model('Celebrity', celebSchema);

module.exports = Celebrity;
