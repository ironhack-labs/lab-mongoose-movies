const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema ({

    title: String,
    genre : String,
    plot : String,
    celebrity: {type: Schema.Types.ObjectId, ref: 'Celebrity'},

})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;