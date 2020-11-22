const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const celebSchema = ({
    name: String,
    occupation: String,
    catchPhrase: String
});

module.exports = model('Celebrity', celebSchema);