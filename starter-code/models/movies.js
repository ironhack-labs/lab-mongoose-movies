const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        genre: String,
        plot: String,
        cast: [{
            type: Schema.Types.ObjectId,
            ref: "celebrities"
        }]
    }
);

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
