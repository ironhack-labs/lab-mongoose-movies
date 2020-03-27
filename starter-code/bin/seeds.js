const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');

const celebrities = [
    {
        name: 'Arnold Shwazenegger',
        occupation: 'Governon',
        catchPhrase: 'Hasta la vista, baby.'
    },
    {
        name: 'Heath Ledger',
        occupation: 'Gone',
        catchPhrase: 'Why so serious?'
    },
    {
        name: 'Wagner Moura',
        occupation: 'Caveira',
        catchPhrase: 'Vai morrer gente, coronel.'
    }
]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Celebrity.create(celebrities.map(c => new Celebrity(c)), (err, response) => {
   if(err) console.log('Create failed. ', err);
   else console.log('Created');
   mongoose.connection.close();
});