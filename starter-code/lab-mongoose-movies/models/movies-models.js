const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: { type : String, required : true},
  genre : { type: String},
  plot : { type : String}, 
 
}, {
  timestamps:true
}
);


// create the "book" model for the books collection
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;