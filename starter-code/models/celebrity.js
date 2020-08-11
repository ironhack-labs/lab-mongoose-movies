const mongoose = require('mongoose');
const { Schema, model } = mongoose;


//create Celebrity Model
const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

//export model

module.exports = model('Celebrities', celebritySchema);