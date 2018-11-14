const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const movieSchema = new Schema({
   title:{type:String},
   genre:{type:String},
   plot:{type:String},
 });

 const Movies = mongoose.model("Movies", movieSchema);

 module.exports = Movies;