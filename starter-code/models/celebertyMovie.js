const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const celebertyMovieSchema = new Schema({
  _movieId: {type: Schema.Types.ObjectId, ref: "movies"},
  _celebertyId: {type: Schema.Types.ObjectId, ref: "celeberty"}
});

const CelebertyMovie = mongoose.model("celebertyMovie", celebertyMovieSchema)

module.exports = CelebertyMovie;