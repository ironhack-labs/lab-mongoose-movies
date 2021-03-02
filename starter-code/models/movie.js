const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,
        ref: "celebrities"
    }]
})

const MovieModel = mongoose.model("movies", movieModel);
module.exports = MovieModel;