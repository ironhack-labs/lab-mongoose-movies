const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity