const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celibritySchema = new Schema({
    name: {
      type: String,
    },
    occupation: {
      type: String,
 
    },
    catchPhrase: {
        type: String,
    }
})

//module.exports = celibritySchema;

module.exports = mongoose.model('celebritySchema',celibritySchema);