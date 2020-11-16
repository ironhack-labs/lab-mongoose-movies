const mongoose = require('mongoose')
const Schema = mongoose.Schema

celebritySchema = new Schema({
    name: {type: String, required: true},
    occupation: {type: String},
    catchPhrase: {type: String}
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity