const mongoose = require('mongoose')

const Celebrityschema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

module.exports = mongoose.model("Celebrity", Celebrityschema)