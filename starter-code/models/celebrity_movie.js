const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrityMovieSchema = new Schema({
  celebrity_id: { type: Schema.Types.ObjectId, required: true },
  movie_id: { type: Schema.Types.ObjectId, required: true },
})

const CelebrityMovieLink = mongoose.model("celebrityMovieSchema", celebrityMovieSchema);
module.exports = CelebrityMovieLink;