const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Celebrities Schema
const celebritySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occupation: String,
    catchPhrase: String
})
//Export Schema

const Celebrity = mongoose.model('Celebrity', celebritySchema)
module.exports = Celebrity;