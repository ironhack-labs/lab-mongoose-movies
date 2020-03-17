const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


const dbtitle = 'celebritiesAndMovies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();

const celebrities = [{
    name: 'Donald Trump',
    occupation: 'politician',
    catchPhrase: 'I\'ve said if Ivanka weren\'t my daughter, perhaps I\'d be dating her.'
},{
    name: 'Dynamo',
    occupation: 'magician' ,
    catchPhrase: 'Some people think it\'s impossible to change the future...but in reality, the future is only what you make it.'

}, {
    name: 'Ryan Reynolds' ,
    occupation: 'actor' ,
    catchPhrase: 'I\’ll look for the joke in things so that I don\’t look for the sadness and the grief.'
}
];

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });

  Movie.collection.drop();

  const movies = [{
        title: 'Joker',
        genre: 'Thriller',
        plot: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'
    },{        
        title: 'Onward',
        genre: 'Animation',
        plot: 'Set in a suburban fantasy world, two teenage elf brothers embark on a quest to discover if there is still magic out there.'
    }, {        
        title: 'Vengadores: Endgame',
        genre: 'Action',
        plot: 'After the devastating events of Vengadores: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\'actions and restore balance to the universe.'
    }
];

Movie.create(movies, (err) => {
    if (err) {throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });