const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String
    },
    catchPhrase : {
        type: String
    }
})

module.exports =  mongoose.model('Celebrity', celebritySchema);