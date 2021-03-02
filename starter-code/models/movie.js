const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title : String,
  genre : String,
  plot : String,
  cast : [{
    type: Schema.Types.ObjectId,
    ref: 'celebrity'
  }]
});

const MovieModel = mongoose.model("movie", movieModel);
module.exports = MovieModel;