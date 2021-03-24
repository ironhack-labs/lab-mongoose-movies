const { Schema, model } = require('mongoose');

const movieSchema = new Schema ({ 
    title: { type: String },
    genre: { type: String },
    plot: { type: String },
})

const Movies = model('movies', movieSchema)

module.exports = Movies