const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        plot: {
            type: String,
            required: true
        }
    }, {
    toJSON: { // para mandar a la vista
        virtuals: true
    },
    toObject: { // para console.log
        virtuals: true
    }
}
)

movieSchema.virtual('castings', {
    ref: 'Casting',
    foreignField: 'movie',
    localField: '_id',
    justOne: false
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
