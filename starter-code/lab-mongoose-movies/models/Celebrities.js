const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const celebritiesSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    image: String
})

module.exports = mongoose.model ("Celebrities", celebritiesSchema);