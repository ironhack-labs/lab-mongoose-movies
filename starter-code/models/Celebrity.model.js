const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const Celebrity = model('Celebrity', new Schema({
    name: String,
    ocupation: String,
    catchPhrase: String
}))

module.exports = Celebrity;