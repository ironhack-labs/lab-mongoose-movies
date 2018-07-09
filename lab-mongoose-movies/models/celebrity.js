const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let celebritySchema = new Schema({
    name: {type: String, required: true},
    occupation: {type: String, required: true},
    catchPhrase: {type: String, required: true} 
})

let Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;