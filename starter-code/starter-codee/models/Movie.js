const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title: String,
  genre:String,
  plot: String,
  
},{timestamps:{
  updatedAt:'updated_at',
  createdAt:'created_at'
}
})
module.exports= mongoose.model('Movie',movieSchema)
