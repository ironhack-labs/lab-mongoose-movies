const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true  // para ordenarlos alfabéticamente, pero me falta algún paso más para que compare caracteres especiales
    },
    occupation: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity