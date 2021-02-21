const mongoose = require('mongoose')
const Schema = mongoose.Schema

CelebritySchema = new Schema ({
    name: {
        type: String, 
        required: true
    },

    occupation: {
     type: String,
    },

    catchPhrase: {
        type: String
    }
})

const Celebrity = mongoose.model('Celebrity', CelebritySchema )

module.exports = Celebrity