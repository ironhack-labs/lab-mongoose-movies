const mongoose = require('mongoose');
mongoose.connect('mongodb:localhost/lab-mongoose-movies');
const Celebrity = require('../models/Celebrities');
const Movie = require('../models/Movies');

 Celebrity.create([
   {
     name: 'Joss Stone',
     occupation: 'Singer',
     catchPhrase: 'Give me 24 hours',
   },
   {
     name: 'Hugh Jackman',
     occupation: 'Actor',
     catchPhrase: 'Hi',
   },
   {
     name: 'Matt Damon',
     occupation: 'Actor',
     catchPhrase: 'Hello',
   }
   ]).then(() => console.log('OK')).catch(err => console.log(err));

  Movie.create([
    {
      title: 'Zombiebers',
      genre: 'Terror',
      plot: 'WTF',
    },
    {
      title: 'Ciudade de deus',
      genre: 'Drama',
      plot: 'Eu sou daditos',
    },
    {
      title: 'City of angels',
      genre: 'Drama',
      plot: 'I am plate',
    }
  ]).then(() => console.log('OK')).catch(err => console.log(err)); 

  mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const films = await Movie.create(movies);
    console.log(`${films.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));