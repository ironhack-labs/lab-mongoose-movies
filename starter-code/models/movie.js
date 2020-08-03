const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
      type: String,
    },
    genre: {
      type: String,
 
    },
    plot: {
        type: String,
    }
})

//module.exports = celibritySchema;

module.exports = mongoose.model('movieSchema',movieSchema);