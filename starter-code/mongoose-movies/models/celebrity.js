const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/movieApp',  {useMongoClient: true});
mongoose.Promise = require('bluebird');

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});

const Celebrity = mongoose.model('celebrity', celebritySchema);
module.exports = Celebrity;