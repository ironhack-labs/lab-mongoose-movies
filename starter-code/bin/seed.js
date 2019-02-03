const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');


const dbName = 'movies-lab';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

Celebrity.collection.drop();

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Show me the money'
  },

  {
    name: 'Charlie Sheen',
    occupation: 'Actor',
    catchPhrase: 'Winning'
  },

  {
    name: 'Nicolas Cage',
    occupation: 'Actor',
    catchPhrase: 'Want to take his face off'
  }

]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
 