const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model'); 


mongoose
  .connect('mongodb://localhost/Celeb-Movies', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

const celebrity = [
    {
      name: 'Monique',
      occupation:'Web Developer',
      catchPhrase: 'and .. and... and',
    },
    {
        name: 'Frank',
        occupation:'Web Developer back -end',
        catchPhrase: 'truth history',
      
    },
    {
        name: 'Milena',
        occupation:'Web Developer back -end',
        catchPhrase: 'I dont know how but it works',
    } 
  ];
  Celebrity.create(celebrity)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`))

  const Movie = require('../models/Movie.model');

const movies = [
    {
      title: 'Express',
      genre:'Sci-Fiction',
      plot: 'Request and Response',
    },
    {
      title: 'Mongoose',
      genre:'Drama',
      plot: 'Dont forget to connect the database',
      
    },
    {
      title: 'HBS',
      genre:'Comedy',
      plot: 'they are kind of cool',
    } 
  ];
   
  Movie.create(movies)
  .then(moviesFromDB => {
  console.log(`Created ${moviesFromDB.length} movies`);
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));