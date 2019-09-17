const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = require('../models/Movie')


var celebritySchema = new Schema({
  name:  String,
  occupation: String,
  catchPhrase:   String,
  movies:  [ { type : Schema.Types.ObjectId, ref: 'Movie' } ],
  image: String,
});


const Celebrity = mongoose.model('Celebrity', celebritySchema)


module.exports = Celebrity;