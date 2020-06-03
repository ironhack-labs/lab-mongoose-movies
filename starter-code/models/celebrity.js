const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String
});

const Celeb = mongoose.model('Celebrity', celebSchema);

module.exports = Celeb;