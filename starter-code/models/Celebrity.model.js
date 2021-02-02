const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        default: 'unknown'
    },
    catchPhrase: {
        type: String
    }
}, 
{
    toJSON: {
        virtuals: true
    }
})

celebritySchema.virtual('movies', {
    ref: "Movie",
    foreignField: "stars",
    localField: "_id"
})

const Celebrity = mongoose.model('Celebrity', celebritySchema) // => celebritys

module.exports = Celebrity