const mongoose = require("mongoose");

const Schema = mongoose.Schema 

const celebSchema = new Schema({
    name: String,
    occ: String,
    catchPhrase: String
})

const Celebrity = mongoose.model('Celebrity', celebSchema)

module.exports = Celebrity