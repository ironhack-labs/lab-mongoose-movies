const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  actors: {type: Schema.Types.ObjectId, ref: "celebrities"}
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const moviesModel = mongoose.model('movies', moviesSchema);
module.exports = moviesModel;

