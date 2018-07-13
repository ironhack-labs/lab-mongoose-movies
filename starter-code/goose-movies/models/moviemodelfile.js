//Calling Mongoose package

const mongoose = require("mongoose");

//Setting up schema for model

const Schema = mongoose.Schema;


const movieSchema = new Schema ({
  title: String,
  genre: String,
  plot: String,
  celebrities: [{type: Schema.Types.ObjectId, ref: 'Celebrity'}],
  reviews: [{reviewer:String, content: String}]
});

//Model is below, rules for model above.
//"movies" means name of the collection

const Movie = mongoose.model("movies", movieSchema);


//exporting Movie Model for use in app.
module.exports = Movie;