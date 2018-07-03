const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
        unique: true
    },
    occupation: {
        type: String,
        required: 'Occupation is required'
    },
    catchPhrase: {
        type: String,
        required: 'Catch phrase is required'
    }
});
const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;