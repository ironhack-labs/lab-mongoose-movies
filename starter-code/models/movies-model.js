const mongoose= require("mongoose")


const movieSchema = {
    title:String,
    genre:String,
    plot:String,
   
   }
   
   const Schema =mongoose.Schema;
   const Movie = mongoose.model("Movie", movieSchema);

   module.exports= Movie