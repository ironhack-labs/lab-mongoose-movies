const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose-movies');

const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Messi',
    occupation: 'Futbol Player',
    catchphrase: 'Sup Ladies',
  },
  {
    name: 'Steve Urkel',
    occupation: 'Nerd',
    catchphrase: 'Did I do that?',
  },
  {
    name: 'Peyton Manning',
    occupation: 'Footbol Player',
    catchphrase: 'Omaha',
  },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celebrities) => {
    console.log(celebrities.name)
  })
  mongoose.connection.close();
});
