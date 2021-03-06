const mongoose = require("mongoose");
const CelebrityModel = require('../models/Celebrity')

const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: [{type: Schema.Types.ObjectId, ref: 'celebrity'}]
})


const MovieModel = mongoose.model('movies', movieSchema);

module.exports = MovieModel;