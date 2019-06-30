const mongoose = require("mongoose"); // Erase if already required

const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  },
  _celeb: { type: Schema.Types.ObjectId, ref: "Celebrity" },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
