const mongoose     = require('mongoose');
const Movie    = require('../models/Movie'); 


mongoose
  .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });





// const celebritiesArray = [
//   {
//     name: 'Howard Stern',
//     occupation: 'Radio Personality',
//     catchPhrase: 'Bababooey',
//   },
//   {
//     name: 'Matthew McConaughey',
//     occupation: 'Actor',
//     catchPhrase: 'Alright, alright, alright',
//   },
//   {
//     name: 'Spongebob Squarepants',
//     occupation: 'Fry Cook',
//     catchPhrase: 'I\'m ready, I\'m ready',
//   },
  
// ];

// Celebrity.create(celebritiesArray)
// .then(()=>{
//     console.log('yay')
//     mongoose.disconnect();
// })
// .catch(()=>{
//     console.log('nooo')
// })


const moviesArray = [
  {
    title: 'Secret Life of Pets',
    genre: 'Family',
    plot: 'While their owners are out, pets have crazy adventures.',
  },
  {
    title: 'Homeward Bound',
    genre: 'Family',
    plot: 'Dog gets separated from family and has a grand adventure while finding his way back home.',
  },
  {
    title: 'Home Alone',
    genre: 'Comedy',
    plot: 'Family takes a trip and leaves one of their children home alone. He wards off robbers in an elaborate fashion until they return. ',
  },
  
];

Movie.create(moviesArray)
.then(()=>{
    console.log('yay')
    mongoose.disconnect();
})
.catch(()=>{
    console.log('nooo')
})