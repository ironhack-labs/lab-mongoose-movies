const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    image: String,
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'celebritys'


module.exports = Celebrity;