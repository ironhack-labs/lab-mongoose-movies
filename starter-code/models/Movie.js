const mongoose = require("mongoose");
const Schema = mongoose.Schema; // import schema from mongoose
// schema is a plan which shows how your model looks like

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});

// Create the Movie model with the movieSchema.
const Movie = mongoose.model("Movie", movieSchema);

// Export the Movie model.
module.exports = Movie;
