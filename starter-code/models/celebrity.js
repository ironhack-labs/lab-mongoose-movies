const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

module.exports = mongoose.model("Celeb", celebSchema);