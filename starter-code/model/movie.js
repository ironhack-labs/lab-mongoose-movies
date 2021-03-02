const moongoose = require("mongoose");
const MovieModel = require("./movie");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
//  cast: [CelebrityModel],
cast: [{ type: Schema.Types.ObjectId, ref: "celebrity" }],
});

const MovieModel = moongoose.model("movie", MovieSchema);
module.exports = MovieModel;
