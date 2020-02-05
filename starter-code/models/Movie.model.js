const mongoose = require('mongoose');
const { Schema, model } = mongoose;


// const movieSchema = new Schema({
//     name: String,
//     occupation: String,
//     catchPhrase: String
// })
// {
//     timestamps: true
// };

const Movie = mongoose.model('Movie', movieSchema);


module.exports = model('Movie', movieSchema);