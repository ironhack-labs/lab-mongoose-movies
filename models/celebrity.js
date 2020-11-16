const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrities = new Schema({
    name: String,
    ocupation: [String],
    catchPhrase: String
},);

const Celebrity = mongoose.model("practicemovies", celebrities);

module.exports = Celebrity;