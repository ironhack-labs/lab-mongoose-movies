const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const Celebrity = model('Celebrity', new Schema({
    name: String,
    ocupation: String,
    catchPhrase: {type: String, default: 'None. Makes for the quite type.'}
}))

module.exports = Celebrity;