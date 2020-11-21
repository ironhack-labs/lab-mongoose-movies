const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return x.connection.dropDatabase();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const celebrities = [
    {
        name: 'Cristiano Ronaldo',
        occupation: 'footbal player',
        catchPhrase: 'Siiiiiiiim'
    },
    {
        name: 'John Cena',
        occupation: 'Actor',
        catchPhrase: 'You cant see me' 
    },
    {   
        name: 'Michelle Obama',
        occupation: 'unkown',
        catchPhrase: 'When they go low, we go high'
    }
];

Celebrity.create(celebrities)
    .then(result=>console.log('celebrities seeded succesfully'))
    .catch(err=> console.log(`Error in seeding celebrities`));