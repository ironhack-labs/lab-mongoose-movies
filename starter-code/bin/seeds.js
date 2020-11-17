const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model'); 

mongoose
  .connect('mongodb://localhost/celebrities', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

const celebrity = [
    {
      name: 'Monique',
      occupation:'Web Developer',
      catchPhrase: 'and .. and... and',
    },
    {
        name: 'Frank',
        occupation:'Web Developer back -end',
        catchPhrase: 'truth history',
      
    },
    {
        name: 'Milena',
        occupation:'Web Developer back -end',
        catchPhrase: 'I dont know how but it works',
    } 
  ];

  Celebrity.create(celebrity)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
