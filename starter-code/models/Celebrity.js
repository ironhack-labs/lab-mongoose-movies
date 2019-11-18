const mongoose = require('mongoose');
const Schema = mongoose.Schema; //(just gettin the funtion by the name, but it is a parenthesis)

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;