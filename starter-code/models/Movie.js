const { model, Schema } = require("mongoose");

const movieSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String
    }
)

module.exports = model("Movie", movieSchema);