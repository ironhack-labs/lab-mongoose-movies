const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({
    title: {type: String},
    director: String,
    star:{type: Schema.Types.ObjectId, ref: "Celeb"},
    description: String,
    image: String,
    donor: {type: Schema.Types.ObjectId, ref: "User", required: true},
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;