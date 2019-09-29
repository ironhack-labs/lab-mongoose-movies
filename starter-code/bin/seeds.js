const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbName = 'celebrity';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {name:"Craque Neto", ocupation:"Apresentador", catchPhrase:"PÃOO! PÃO DE FORMAAAA!!"},
//   {name:"Sandy", ocupation:"Cantora", catchPhrase:"DIG-DIG-JOY, DIG-JOY-POPOY"},
//   {name:"Faustinho Silva", ocupation:"Meme", catchPhrase:"O LOKINHO MEU!"}
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

const Movie = require('../models/movie');

const dbName = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {title: 'The Lion King', genre: 'animation', plot:'aaa'},
  {title: 'The Dark Knight', genre: 'action', plot:'bbb'},
  {title: 'The Godfather', genre: 'Drama', plot:'ccc'},
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});