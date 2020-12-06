const mongoose = require('mongoose')

const CelebritySchema = new mongoose.Schema({
    name: String, 
    ocuppation: String, 
    catchPhrase: String,
})

module.exports = mongoose.model("Celebrity", CelebritySchema)

