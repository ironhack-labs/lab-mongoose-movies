const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type:String, unique: true},
    genre: String,
    plot: String
  });

module.exports =  mongoose.model("Movie", movieSchema);