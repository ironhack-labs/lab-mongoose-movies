const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebrityChema = new Schema({
    name: {type: String, required: true},
    occupation: {type: String},
    catchPhrase: {type: String}
});

const Celebrity = mongoose.model('Celebrity', celebrityChema);

module.exports = Celebrity;