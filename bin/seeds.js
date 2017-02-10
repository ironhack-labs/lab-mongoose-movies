const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');



const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Barack Obama',
    occupation: "politican",
    catchPhrase: 'Uhhh, look...',
  },
  {
    name: "Kanye West",
  occupation: "rapper",
    catchPhrase: "Ima' let you finish...",
  },
  {
    name: "Louis C.K.",
    occupation: "comedian",
    catchPhrase: "Life is absurd.",
  }
];


Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (celebrity) => {
    console.log(celebrity.name)
  })
  mongoose.connection.close();
});
