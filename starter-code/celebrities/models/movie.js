const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
    required: [true, "Provide a title"]
  },
  genre: {
    type: String,
    required: [true, "Provide an genre"]
  },
  plot: String
});

module.exports = mongoose.model("Movie", moviesSchema);
