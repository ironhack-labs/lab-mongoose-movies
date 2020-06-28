const mongoose = require('mongoose')
const { stringify } = require('querystring')

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,

    },
    occupation: {
        type: String,
    },
    catchPhrase: {
        type: String
    },
},{
    timestamps: true
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity