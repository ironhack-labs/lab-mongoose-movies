const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Praise Xenu!",
  },
  {
    name: "Owen Wilson",
    occupation: "Actor",
    catchPhrase: "Wow...!",
  },
  {
    name: "Rihanna",
    occupation: "Singer",
    catchPhrase: "Umbrella ella, eh, eh!",
  },
  {
    name: "Beyoncé",
    occupation: "Singer",
    catchPhrase: "The truth is out there",
  },
  {
    name: "Marlon Brando",
    occupation: "Actor",
    catchPhrase: "I'm going to make him an offer he can't refuse",
  },
  {
    name: "Al Pacino",
    occupation: "Actor",
    catchPhrase: "Say hello to my little friend",
  },
  {
    name: "JayZ",
    occupation: "Singer",
    catchPhrase: "I got 99 problems and a bitch ain't one",
  },
  
  
]

Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrities!`)
  mongoose.connection.close()
});