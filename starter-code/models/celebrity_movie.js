const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrityMovieSchema = new Schema({
  celebrity_id: { type: Schema.Types.ObjectId, required: true, ref: "Celebrity" }, //  "_celebrity" would be better
  movie_id: { type: Schema.Types.ObjectId, required: true, ref: "Movie" }, // "_movie" would be better
})

const CelebrityMovieLink = mongoose.model("celebrityMovieSchema", celebrityMovieSchema);
module.exports = CelebrityMovieLink;