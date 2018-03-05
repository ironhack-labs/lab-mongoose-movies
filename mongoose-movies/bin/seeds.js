const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies',);

// Linked to the "module.exports = Celebrity;" line
// in "celebrity.js"
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie-model')

// Celebrities
const celebrities = [
    {
      name: 'Oprah Winfrey',
      occupation: 'Media Mogul',
      imageUrl: 'https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2013/03/04/044944_1284927.jpg.800x999_q95_crop-smart_upscale.jpg',
      catchPhrase: 'You get a car! You get a car! Everyone gets a car!',
    },
    {
        name: 'Mariah Carey',
        occupation: 'Singer',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Mariah_Carey_4_by_David_Shankbone.jpg',
        catchPhrase: 'Lets get festive',
      },
    {
        name: 'Beyonce',
        occupation: 'Singer',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Beyonce_cropped.jpg',
        catchPhrase: 'If you liked it then you should have put a ring on it.',
    },
  ];

  // Save Fake Celebrities to Database
  Celebrity.create(celebrities, (err, docs) => {
    if (err) {
        throw err;
    }

    docs.forEach((celebrity) => {
        console.log(`${celebrity.name}`);
    });
    mongoose.connection.close();
  });


// Movies
const movies = [
  {
    name: "Movie1",
    genre: "genre1",
    plot: "plot1"
  },
  {
    name: "Movie2",
    genre: "genre2",
    plot: "plot2"
  },  {
    name: "Movie2",
    genre: "genre2",
    plot: "plot2"
  },
]


//Save Fake Movies to Database
Movie.create(movies, (err, savedMovies) => {
  if (err) {
    throw err;
  }
  savedMovies.forEach((oneMovie) => {
    console.log(`${oneMovie.name}`)
  });
  mongoose.connection.close();
})