const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

mongoose
  .connect('mongodb://localhost/express-celebrity-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));


  const movies = [ 
    {
      name: "A volta dos malditos",
      genre: "TERRIR",
      plot: "Historia sem pe nem cabeça"
    },
    {
      name: "Scream",
      genre: "Thriller",
      plot: "Mask guykills everyone"
    },
    {
      name: "IKWYDLS",
      genre: "Horror",
      plot: "i know what you did last summer"
    },
  ];

  Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} MOVIES`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

  // const celebrities = [
  //     {
  //       name: 'Arnold Schaszneger',
  //       occupation: 'Actor',
  //       catchPhrase: 'I ll be right back',
  //     },
  //     {
  //       name: 'Buzz LightYear',
  //       occupation: 'Cartoon',
  //       catchPhrase: 'To infinty and beyond',
  //     },
  //     {
  //       name: 'Bruna Surfistinha',
  //       occupation: 'Not Applicable',
  //       catchPhrase: 'Hello !',
  //     },

  // ];
  // Celebrity.create(celebrities)
  // .then(celebsFromDB => {
  //     console.log(`cREATED ${celebsFromDB.length} Celebrities`);
  //     mongoose.connection.close();
  // })
  // .catch(err => console.log(err));
  
