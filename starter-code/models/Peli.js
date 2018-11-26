const mongoose = require("mongoose")
const Schema = mongoose.Schema
 const movieSchema = new Schema ({
  title: String,
  genre:String,
  plot: String,
  
},{timestamps:{
  updatedAt:true,

  createdAt:true,
}
})
module.exports= mongoose.model("Movie",movieSchema)