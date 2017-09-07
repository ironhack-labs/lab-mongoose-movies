const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/movieApp')

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchphrase: String,
});

const Celebrity = mongoose.model('celebrity', celebritySchema);