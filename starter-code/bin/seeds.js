// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbName = 'mongoose-project';
// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });
// Celebrity.collection.drop();

// const celebrities = [{
//   name:'Kim Kardashian',
//   occupation: 'unknown',
//   catchPhrase: 'Nicole Richie reminds me of my jeep',
// },{
//   name: 'Mc Livinho',
//   occupation: 'Singer',
//   catchPhrase: 'Eu vivo em todo lugar, sei bem como o mundo ta',
// },{
//   name: 'Beyonce',
//   occupation: 'Singer',
//   catchPhrase: 'Who runs the world? Girls',
// }
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${celebrities.length} movies`);
//   mongoose.connection.close();
// });

const mongoose = require('mongoose');
const Movie = require('../models/movies');

const dbName = 'mongoose-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });
Movie.collection.drop();

const movie = [{
  title: 'Toy Story',
  genre: 'Adventure',
  plot: 'The story of toys',
},{
  title: 'Aladdin',
  genre: 'Adventure',
  plot: 'The story of a thief',
},{
  title: 'MIB',
  genre: 'Adventure',
  plot: 'Men in Black',}
];

Movie.create(movie, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movie.length} movies`);
  mongoose.connection.close();
});
