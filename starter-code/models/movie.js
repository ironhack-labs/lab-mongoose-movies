const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title:
  {
    type: String,
    required: [true, "Please enter a valid title"]
  },
  genre:
  {
    type: String,
    required: [true, "Please enter a valid genre"]
  },
  plot:
  {
    type: String,
    required: [true, "Please enter a valid plot"]
  }
});

const MovieModel = mongoose.model('Movie', movieSchema);
module.exports = MovieModel;
