const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const MovieSchema = new Schema({
        title: String,
        genre: String,
        plot: String,
    }, {
        timestamps: true
    })

    const Movie = mongoose.model("movies", MovieSchema);

    module.exports = Movie; 