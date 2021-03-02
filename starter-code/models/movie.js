const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
name: String,
genre :String,
plot: String,
cast: [{ type: Schema.Types.ObjectId, ref: "celebrity" }]
});

const MoviesModel = mongoose.model("movie", movieSchema);

module.exports = MoviesModel;