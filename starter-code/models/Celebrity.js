const moongoose = require('mongoose');
const Schema = moongoose.Schema


const celebritySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    occupation: String,
    catchPhrase: String
})


const Celebrity = moongoose.model('Celebrity', celebritySchema)
module.exports = Celebrity