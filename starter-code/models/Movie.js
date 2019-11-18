const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
  title:{type:String, required:true},
  genre:String,
  plot:String
})

module.exports = model("Movie", movieSchema)