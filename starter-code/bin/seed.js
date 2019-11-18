const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

celebrities = [
  { 
    name: 'Natalie Portman',
    occupation: 'Actress',
    catchPhrase: 'Lying is the most fun a woman can have without taking her clothes off.'
  },
  { 
    name: 'Jack Nicholson',
    occupation: 'Actor',
    catchPhrase: 'I hate advice unless I\'m giving it. I hate giving advice, because people won\'t take it.'
  },
  { 
    name: 'Jean-Claude Van Damne',
    occupation: 'Actor',
    catchPhrase: 'If you phone a psychic and she doesn\'t answer the phone before it rings, hang up.'
  }
]

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true} )
    .then( () => {
        return Celebrity.create(celebrities);
    })
    .then( (insertedDocuments) => {
        console.log('Inserted documents', insertedDocuments); 
        mongoose.connection.close();
    })
    .catch( (err) => console.log(err));

