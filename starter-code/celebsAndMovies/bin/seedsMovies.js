
// in the example code the line below is not commented but I dont think it is needed because it is called in app.js
// it was needed because app.js is not related to this seeds.js file, we run it independently with node bin/seeds.js
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

// in the example code the line below is not commented but I dont think it is needed because it is called in app.js
// it was needed because app.js is not related to this seeds.js file, we run it independently with node bin/seeds.js
const dbName = 'celebsandmovies'
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: 'movie1',
    genre: 'genre1',
    plot: 'plot1',
  },
  {
    title: 'movie2',
    genre: 'genre2',
    plot: 'plot2',
  },
  {
    title: 'movie2',
    genre: 'genre2',
    plot: 'plot2',
  }
]

Movie.create(movies)
.then((result)=>{
    console.log(`created ${result.length} Movies`);
    mongoose.disconnect();
})
.catch((err)=>{
    console.log(err)
})