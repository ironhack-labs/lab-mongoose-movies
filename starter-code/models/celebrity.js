const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');

const Schema = mongoose.Schema

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model('celebrities', celebritySchema);

module.exports = Celebrity;