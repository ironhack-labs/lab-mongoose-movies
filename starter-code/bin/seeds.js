// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbtitle = 'starter-code';
// mongoose.connect(`mongodb://localhost/${dbtitle}`);
// Celebrity.collection.drop();

// const celebrities = [
//   {
//     name: 'Johan Cruyff',
//     occupation: 'Jogador e técnico de futebol',
//     catchPhrase: 'Se for para ser atropelado, que seja por uma Ferrari. O São Paulo jogou como legítimo campeão do mundo.'
//   },
//   {
//     name: 'Telê Santana',
//     occupation: 'Jogador e técnico de futebol',
//     catchPhrase: 'Atingir a perfeição é impossível. Mas aproximar-se cada vez mais dela, não'
//   },
//   {
//     name: 'Muricy Ramalho',
//     occupation: 'Jogador e técnico de futebol',
//     catchPhrase: 'Aqui é trabalho, meu filho',
//   },
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

const mongoose = require('mongoose');
const Movies = require('../models/movies');

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Movies.collection.drop();

const movies = [
  {
    title: 'Before Sunrise',
    genre: 'Drama',
    plot: 'A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
  },
  {
    title: 'Le fabuleux destin d\'Amélie Poulain',
    genre: 'Romance',
    plot: 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.'
  },
  {
    title: 'The Curious Case of Benjamin Button',
    genre: 'Drama',
    plot: 'Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences.',
  },
];

Movies.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});
