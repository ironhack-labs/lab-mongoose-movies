const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    }
})

const Movie = mongoose.model("Movie", MovieSchema)
//console.log('esto es el modelo Movie', { Movie})

module.exports = Movie