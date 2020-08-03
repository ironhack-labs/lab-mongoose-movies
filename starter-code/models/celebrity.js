const mongoose = require('mongoose');

let celebSchema = new mongoose.Schema({
    name: String, 
    occupation: String,
    catchPhrase: String
})

let celebModel = mongoose.model('model', celebSchema);

module.exports =  celebModel;