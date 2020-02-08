require('dotenv').config();

const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities')


const celebrities = [
  {
    name: "LeonarDiCapriodo ",
    occupation: "Actor",
    catchPhrase: "I figure life’s a gift, and don’t intend on wasting it."
  },
  {
    name: "Christian Bale",
    occupation: "Actor",
    catchPhrase: "I think trying too hard to be sexy is the worst thing in the world a woman can do."
  },
  {
    name: "Robert Downey Jr.",
    occupation: "Actor",
    catchPhrase: "You can take away my house, all my tricks and toys. One thing you can’t take away… I am Iron Man."
  }
];

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Celebrities.deleteMany()
  .then(() => {
    return Celebrities.create(celebrities);
  })
  .then(() => {
    console.log("succesfully added all the data");
    mongoose.connection.close();
    process.exit(0);
  });

