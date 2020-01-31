const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: { type : String, default : 'https://loremflickr.com/cache/resized/65535_48690418248_9d334f129b_182_268_nofilter.jpg' },
  description: String,
  showtimes: [String],
  celebrities : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity' }],
});

const Movie = mongoose.model("Movie", schema);
module.exports = Movie;
