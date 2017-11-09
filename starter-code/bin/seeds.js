const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies-celebrities', {useMongoClient: true});
const Celebrity = require('../models/celebrities');

const celebrities = [
  {
    name: "Jordi Hurtado",
    occupation: "Inmortal being",
    catchPhrase : "Life has no end for me, I am infinite.",
  },
  {
    name: "Nicolas Cage",
    occupation: "Sexy Actor",
    catchPhrase : "Put... the bunny... back... in the box.",
  },
  {
    name: 'Rick Sanchez',
    occupation: "Crazy Scientist",
    catchPhrase : "Wubba lubba dub dub!",
  }
];


Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((celeb) => {
    console.log(celeb.name)
  });
  mongoose.connection.close();
});
