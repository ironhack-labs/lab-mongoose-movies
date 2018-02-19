//require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//require Schema
const CelebritySchema = new Schema({
    name        : String,
    occupation  : String,
    imageUrl    : String,
    catchPhrase : String,
});

//create model
const Celebrity = mongoose.model('Celebrity', CelebritySchema);

//export module
module.exports = Celebrity;