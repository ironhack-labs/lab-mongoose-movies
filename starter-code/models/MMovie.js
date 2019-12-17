const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({
    title: String,
    genre: String,
    image: String,
    plot: String,
    celebrity: {type: Schema.Types.ObjectId, ref: "Celebrity"}
})

const MMovie = mongoose.model("MMovie", movieSchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'mmovies'


module.exports = MMovie;