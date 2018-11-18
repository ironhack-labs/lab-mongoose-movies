const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: {type: String, default: 'Unknown'},
    catchphrase: String
});

const Celeb = mongoose.model('Celeb', celebSchema);
module.exports = Celeb;