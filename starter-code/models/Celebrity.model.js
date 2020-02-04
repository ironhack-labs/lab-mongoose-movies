const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String
    }
)

module.exports = mongoose.model('Celebrity', celebritySchema);