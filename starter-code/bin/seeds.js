const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity'); // Traz o banco
const Movie = require('../models/Movie');

const celebritys = 'celebritys';
mongoose.connect(`mongodb://localhost/${celebritys}`);

/* const celebrity = [
  {
    name: 'Taylor Swift',
    occupation: 'Singer',
    catchPhrase: 'Swift',
  },
  {
    name: 'Emma Stone',
    occupation: 'Actrees',
    catchPhrase: 'Stone',
  },
  {
    name: 'Julia Roberts',
    occupation: 'Actrees',
    catchPhrase: 'Roberts',
  },
]; */

const movies = [
  {
    title: 'Corra que a policia vem ai',
    genre: 'Comédia',
    plot: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. ',
  },
  {
    title: 'Matrix',
    genre: 'Ficção Científica',
    plot: ' Praesent lacinia ultrices consectetur. Sed non ipsum felis. ',
  },
  {
    title: 'Coração Valente',
    genre: 'Ação',
    plot: 'Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de cevadiss deixa as pessoas mais interessantis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. ',
  },
];

Movie.create(movies, (err) => { // Cria a estrutura do banco
  if (err) { throw (err); }
  // console.log(`Created ${celebrity.length} celebritys`);
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
