const mongoose = require('mongoose');
                                //qué quiere decir exactamente este parámetro?
module.exports = mongoose.model('Celebrity', new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}));