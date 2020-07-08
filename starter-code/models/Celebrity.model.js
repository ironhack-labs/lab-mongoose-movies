const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    occupation: {
        type: String,
        required: true
    },

    catchphrase: {
        type: String,
        required: true
    }
});

const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;