


const MovieModel = require('../models/movie.model');
require('../app');

// let seedData = [{name: 'Tom Cruise',occupation: 'actor', catchPhrase: 'Nothing is imposible'},{name: 'Beyonce',occupation: 'singer', catchPhrase: 'I\'m a Single lady'},
// {name: 'Elon Musk',occupation: 'CEO', catchPhrase: 'Let\'s go to Mars'}]
// CelebrityModel.insertMany(seedData)
//   .then((dataseeded)=>{
//     console.log('Data Seeded:',dataseeded);
//   });

let seedData = [{title: 'Scary Movie', genre: 'comedy', plot: 'funny horror'}, {title: 'Titanic', genre: 'drama', plot: 'romace'},
{title: 'Star Wars', genre: 'sci-fy', plot: 'space wars'}];

MovieModel.create(seedData)
  .then((dataAdded)=>{
    console.log('Data added:',dataAdded)
  })

