const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
firstName: String,
lastName: String,
occupation: String,
catchPhrase: String
})

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;