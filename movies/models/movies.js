const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const moviesSchema = new Schema({
  name: { type: String },
  genre: { type: String },
  plot: { type: String },
  profileImage: { type: String, default: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg' },
});

const Movies = mongoose.model('Movies', moviesSchema);


module.exports = Movies;
