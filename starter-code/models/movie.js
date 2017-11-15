const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieModel = new Schema({
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

module.exports = MovieModel;
