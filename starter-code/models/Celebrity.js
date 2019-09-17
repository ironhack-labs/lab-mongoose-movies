const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const MovieList = new Schema({
//   movie: {type: mongoose.Schema.Types.ObjectId, ref = "Movie"}
// })

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  movies: { type: mongoose.Schema.Types.ObjectId, ref : "Movie"}
})

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;