const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const celebritySchema = new Schema(
    {
        name: {type: String, required: true},
        occupation: {type: String, default: 'unknown'},
        catchPhrase: String,
    },
    {
        timestamps: true
    }
)

module.exports = model('Celebrity', celebritySchema);