const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  stars: [ 
    {
      type: Schema.ObjectId, ref: 'celebrity' 
    }
  ]
}, {collection:'movies'})



const Movies = mongoose.model('Movies', moviesSchema)
module.exports = Movies