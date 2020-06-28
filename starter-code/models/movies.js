const mongoose = require("mongoose");
const SchemaM = mongoose.Schema;

const moviesSchema = new SchemaM({
    title: { type: String },
    genre: { type: [String] ,
      enum: ["Action", "Drama", "Comedy", "Scary"]},
    plot: { type: String },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
