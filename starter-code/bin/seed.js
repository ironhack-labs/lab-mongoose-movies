const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'moviesDB';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "I will be back!"
  },
  {
    name: "Samuel L. Jackson",
    occupation: "Actor",
    catchPhrase: "Enough is enough! I had enough with the mother fucking snakes in this mother fucking plane!"
  },
  {
    name: "Bon Jovi",
    occupation: "Singer",
    catchPhrase: "Success is failing 9 times and getting up 10"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} records`)
  mongoose.connection.close()
});