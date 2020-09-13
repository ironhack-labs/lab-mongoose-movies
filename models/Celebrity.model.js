const mongoose = require ('mongoose')

const celebritySchema = new mongoose.Schema({
    name : String,
    occupation : { type: String, enum: ['actor', 'singer', 'comedian', 'unknown', 'oxigen waste']},
    catchphrase : String
}, {
    timestamps : true
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity