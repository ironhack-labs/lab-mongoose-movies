//Celebrity Model

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celeSchema = new Schema (
    {
        name: String,
        occupation: String,
        catchPhrase: String,
        imagePhrase: String,
    },
    {
        timestamps: true
    }
);

module.exports = model('Cele', celeSchema);