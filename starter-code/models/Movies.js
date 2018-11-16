const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    donor: {type: Schema.Types.ObjectId, ref: 'User'} 
  });

const Movies = mongoose.model('Movies', movieSchema);


module.exports = Movies;