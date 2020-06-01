const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Celebrities Schema
const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})
//Export Schema

const Celebrity = mongoose.model('Celebrity', celebritySchema)
module.exports = Celebrity;