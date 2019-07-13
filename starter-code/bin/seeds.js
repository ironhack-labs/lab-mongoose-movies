const mongoose = require('mongoose');
const Movie = require('../models/Movie');


mongoose
  .connect('mongodb://localhost/starter-code', {
    useMongoClient: true
  })
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const movies = [{
  title: "Star Wars",
  genre: "science fantasy",
  plot: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.",
  celebrity: "Mark Hamill"},
  {
    title:"Harry Potter",
    genre:"Fantasy Fiction",
    plot:"a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths.",
    celebrity: "Daniel Radcliffe"
  }
];

Movie.create(movies)
  .then(() => {
    console.log('yay')
    mongoose.connection.close();
  })
  .catch(() => {
    console.log('nooo')
  })