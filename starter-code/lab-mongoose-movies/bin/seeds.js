const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Beyonce",
    occupation: "Singer",
    catchphrase: "hello"
  },
  {
    name: "Michael Jackson",
    occupation: "Singer",
    catchphrase: "hey"
   
  },
  {
    name: "Leonardo DiCaprio",
    occupation: "Actor",
    catchphrase: "lol"
  }

];


Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});