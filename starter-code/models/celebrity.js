const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema({
    name: {type: String},
    ocupation: {type: String},
    catchPhrase: {type: String} 
});

const Celebrity = mongoose.model('Celebrity', celebritiesSchema);

module.exports = Celebrity;

