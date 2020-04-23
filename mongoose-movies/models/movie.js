const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  plot: String,
  _celebrities: [ { type : Schema.Types.ObjectId, ref: 'Celebrity' } ]
  }, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;