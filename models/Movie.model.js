// ITERATION 7

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema({

    title: {type: String, required: true},
    genre: {type: String},
    plot: {type: String},
    cast: [{type: Schema.Types.ObjectId, ref:'Celebrity'}]

});

module.exports = model('Movie', movieSchema);