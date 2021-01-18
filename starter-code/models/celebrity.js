const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
        type: String,
        required: 'Name is required.'
    },
    occupation: {
        type: String,
        required: 'Occupation is required.'
    },
    catchPhrase: {
        type: String,
        required: 'Catch phrase is required.'
    }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;