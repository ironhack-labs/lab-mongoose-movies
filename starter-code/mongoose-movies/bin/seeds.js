const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviesdb', {useMongoClient: true});
const Celebrity = require('../models/celebrities');

const celebrities = [
  {
    name        : 'Jennifer Lawrence',
    occupation  : 'Actress',
    catchPhrase : "Teenagers only have to focus on themselves - its not until we get older that we realize that other people exist."
  },
  {
    name        : 'Emma Watson',
    occupation  : 'Actress',
    catchPhrase : "All I can do is follow my instincts, because I'll never please everyone."
  },
  {
    name        : 'Gal Gadot',
    occupation  : 'Actress',
    catchPhrase : "I wanted to show that women are empowered and strong, and don't have to be saved by some male hero, but they can take care of themselves using their intelligence and their power."
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrities) => {
    console.log(celebrities.name)
  });
  mongoose.connection.close();
});
