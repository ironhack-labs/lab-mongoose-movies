const { Schema, model } = require('mongoose');

const movieSchema = new Schema ({ 
    title: { type: String },
    genre: { type: String },
    plot: { type: String },
})

const Celebrity = model('celebrity', celebritySchema)

module.exports = Celebrity