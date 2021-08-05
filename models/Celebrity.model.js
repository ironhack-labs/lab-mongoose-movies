const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema({

    name: {type: String, required: true},
    occupation: {type: String},
    catchPhrase: {type: String}

});

module.exports = model('Celebrity', celebritySchema);