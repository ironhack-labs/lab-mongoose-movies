
const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

const dbName = 'lab-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Michael Jackson",
    occupation: "Singer",
    catchPhrase: "I love you",
  },
  {
    name: "Mariah Carey",
    occupation: "Singer",
    catchPhrase: "All I want for Christmas is you",
  },
  {
    name: "Leonardo Dicaprio",
    occupation: "Actor",
    catchPhrase: "I don't know",
  }, 
]

Celeb.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});