const mongoose = require('mongoose');
const { Schema, model } = mongoose;


//create Movie Model
const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})

//export model

module.exports = model('Movie', movieSchema);