const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const MyMovieModel = require('../models/movie');

mongoose
  .connect('mongodb://localhost/Movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });  

//   title: String,
//   genre: String,
//   plot: String,
//   rating: Number

const movieArray = [{
    title: "Lock stock and two smokin'barrel",
    genre: "adventure",
    plot: "crazy people with shotguns go on adventure",
    rating: 5
}, {
    title: "Kermit de kikker",
    genre: "cartoon",
    plot: "What the frog?",
    rating: 8
}, {
    title: "Cinderella",
    genre: "fairytale",
    plot: "girl loses her shoe and falls in love with a prince",
    rating: 9
}]


MyMovieModel.remove({}, () => {
    for (let i = 0; i < movieArray.length; i++) {
        MyMovieModel.create(movieArray[i]);
    }
})


