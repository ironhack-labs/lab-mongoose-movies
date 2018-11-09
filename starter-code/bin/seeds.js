const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Rita Lee', 
    occupation: 'Musician',
    catchPhrase: 'Hoje é dia de Rock, bebê!'
  },
  {
    name: 'Rodrigo', 
    occupation: 'Teacher',
    catchPhrase: 'Isso é Nutella'
  },
  {
    name: 'Raul Seixas', 
    occupation: 'Musician',
    catchPhrase: 'Toca eeu!!'
  },
];

mongoose.connect('mongodb://localhost/mongoosemovies', { useNewUrlParser: true } );
Celebrity.create(celebrities, (err) =>{
  if (err) {throw(err)}
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});