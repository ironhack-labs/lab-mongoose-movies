const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const celebrity = new Schema({
    name: String, 
    occupation: String, 
    catchPhrase: String,
})

const Celebrity = mongoose.model('Celebrity', celebrity) 

module.exports = Celebrity; 