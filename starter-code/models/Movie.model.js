const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/User.model');
const Celebrity = require('../models/Celebrity.model');

const movieSchema = new Schema ({
    title: { type: String, required: true },
    genre: { type: [String], required: true },
    plot: { type: String, required: true },
    cast: [{ type: Schema.Types.ObjectId, ref: 'Celebrity', required: true }],
    user: {type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;

