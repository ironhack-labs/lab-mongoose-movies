const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.model');
const DB_NAME = 'moongoose-movies';

// require('../configs/db.config'); ---- if I was uding a config file

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));



const celebrities = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "Hasta la vista, baby",
  },
  {
    name: "Dwayne Johnson",
    occupation: "Actor",
    catchPhrase: "Do you smell what The Rock is cooking?",
  },
  {
    name: "Ryan Seacrest",
    occupation: "Actor",
    catchPhrase: "Seacrest out.",
  }
];



// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });