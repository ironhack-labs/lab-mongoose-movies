const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    genre: {
        type: [String],
        require: true,
        trim: true
    },

    plot: {
        type: String,
        require: true,
        trim: true
    },

    image: {
        type: String,
        required: true,
        default: 'https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d'
    }

}, {
    timestamps: true
})


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
