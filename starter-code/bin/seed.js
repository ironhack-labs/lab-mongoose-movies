const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');
const Movie = require('./../models/Movie');

// celebrities = [
//   { 
//     name: 'Natalie Portman',
//     occupation: 'Actress',
//     catchPhrase: 'Lying is the most fun a woman can have without taking her clothes off.'
//   },
//   { 
//     name: 'Jack Nicholson',
//     occupation: 'Actor',
//     catchPhrase: 'I hate advice unless I\'m giving it. I hate giving advice, because people won\'t take it.'
//   },
//   { 
//     name: 'Jean-Claude Van Damne',
//     occupation: 'Actor',
//     catchPhrase: 'If you phone a psychic and she doesn\'t answer the phone before it rings, hang up.'
//   }
// ]

movies = [
  {
    title: 'OSS 117: Lost in Rio',
    genre: 'Comedy',
    plot: 'Set in 1967, Lost in Rio sees OSS 117 sent to Brazil in order to retrieve a microfilm list of French Nazi sympathizers, only to once again unknowingly set foot into a bigger international intrigue.'
  },
  {
    title: 'OSS 117: Cairo, Nest of Spies',
    genre: 'Comedy',
    plot: 'Set in 1955, the film follows the exploits of the French secret agent Hubert Bonisseur de La Bath / OSS 117, as he is sent to Cairo to investigate the disappearance of his best friend and fellow spy Jack Jefferson, only to stumble into a web of international intrigue.'
  },
  {
    title: 'The Artist',
    genre: 'Comedy',
    plot: 'The story takes place in Hollywood, between 1927 and 1932, and focuses on the relationship of an older silent film star and a rising young actress as silent cinema falls out of fashion and is replaced by the "talkies".'
  }
]

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true} )
    .then( () => {
        return Movie.create(movies);
    })
    .then( (insertedDocuments) => {
        console.log('Inserted documents', insertedDocuments); 
        mongoose.connection.close();
    })
    .catch( (err) => console.log(err));

