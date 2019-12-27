const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Adam Sandler",
    occupation: "Actor",
    catchPhrase: "You are my closest friend, and I don't even like you."
  },
  {
    name: "Jim Carrey",
    occupation: "Actor",
    catchPhrase: "I gotta go guys! I gotta date with your mothers!"
  },
  {
    name: "Ben Stiller",
    occupation: "Actor",
    catchPhrase: "I'm sorry that good looking people like us made you throw up and feel bad about yourself."
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});