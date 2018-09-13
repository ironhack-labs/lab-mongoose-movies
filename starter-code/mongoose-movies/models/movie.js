const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, required: true},
  genre: String,
  imgName: String,
  imgPath: String,
  cast: [{type: Schema.Types.ObjectId, ref: "Celeb"}]
});


const Movie = mongoose.model("Movie", movieSchema)


module.exports = Movie;