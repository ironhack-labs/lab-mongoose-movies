

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    ocupation: String,
    catchPhrase: String
});

const celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = celebrity;
