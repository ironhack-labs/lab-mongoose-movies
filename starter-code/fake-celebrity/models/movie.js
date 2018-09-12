const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  image: String,
  celebrity: {type: Schema.Types.ObjectId, ref: "Celebrity"},
  genre: String,
  plot: String,
  owner: {type: Schema.Types.ObjectId}
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie
