const mongoose = require("mongoose")
const MovieModel = require("./movie")
const Schema = mongoose.Schema

const CelebritySchema = new Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: [{ type: Schema.Types.ObjectId, ref: "celebrity.js" }],

  });

const MovieModel = mongoose.model("movie.js", MovieSchema);
module.export = MovieModel;