const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myCelebs');

const Celebrity = require('../models/celebrity');

const celebrities = [
    { name: 'Eminem', occupation: 'rap singer', catchPhrase: 'hey dude' },
    { name: 'Denzel Washington', occupation: 'actor', catchPhrase: 'my friend' },
    { name: 'Spartacus', occupation: 'actor', catchPhrase: 'Kill them all' }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebs) => {
    console.log(celebs.name)
  });
  mongoose.connection.close();
  
});