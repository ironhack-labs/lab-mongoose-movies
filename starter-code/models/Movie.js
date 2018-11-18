const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  star: {type: Schema.Types.ObjectId, ref: 'Celebrity'},
  plot: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Movie", movieSchema);