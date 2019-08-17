const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: [
      {
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
      }
    ], 
  },
  {
    // keeps record of when it was created and updated
    timestamps: true
  }
);


const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
