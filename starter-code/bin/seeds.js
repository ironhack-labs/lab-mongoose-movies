const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [{
    name: "Charlie Sheen",
    occupation: "Actor",
    catchPhrase: "Winning!"
  },
  {
    name: "Dwayne Johnson",
    occupation: "Wrestler",
    catchPhrase: "Do you smell what The Rock is cooking?"
  },
  {
    name: "Snoop Dogg",
    occupation: "Rapper",
    catchPhrase: "Fo Shizzle"
  }
];


// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });