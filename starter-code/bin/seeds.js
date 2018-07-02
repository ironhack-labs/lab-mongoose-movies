const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: 'Celeste and Jesse Forever',
    genre: 'Comedy',
    plot: 'Two geeks fall in love...or something like it'
  },
  {
    title: 'Saturday Church',
    genre: 'Drama',
    plot: 'A shy and effeminate boy finds himself coping with life',

  },
  {
    title: 'Jobs',
    genre: 'Biography',
    plot: 'The life of Steve Jobs'
  }
];
// Movie.create(movies, (err) =>{
//   if (err) {throw(err)}
//   console.log(`Created ${movies.length} movies`)
//  mongoose.connection.close();
// });


// const celebrities =[
//   {
//     name: 'Rashida Jones',
//     occupation: 'actress', 
//     catchPhrase: 'Just because a situation is grim doesn\'t mean you don\'t have every right to smile.',
    
//   },
//   {
//     name: 'Indya Moore',
//     occupation: 'actress',
//     catchPhrase: 'People who have trouble finding acceptance and love in their life settle for whatever they can get.',
//   },
//   {
//     name: 'Ashton Kutcher',
//     occupation: 'actor',
//     catchPhrase: 'I don\'t believe that old cliche that good things come to those who wait. I think good things come to those who want something so bad they can\'t sit still.',
//   }
// ];

// Celebrity.create(celebrities, (err)=>{
//   if (err) {throw (err)}
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

// Movie.create(movies, (err)=>{
//   if (err) {throw (err)}
//   console.log(`Created ${moviess.length} movies`)
//   mongoose.connection.close();
// });

