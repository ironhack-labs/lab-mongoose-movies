const {model, Schema}= require("mongoose")

const MovieModel = new Schema ({
  title: String, 
  genre: String,
  plot: String 
})

module.exports =  model("Movies", MovieModel)