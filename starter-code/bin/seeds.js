const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

const DB_TITLE = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Keanu Reeves',
    occupation:'Actor',
    catchPhrase: "I'm not the one."
  },
  {
    name: 'Carrie-Anne Moss',
    occupation:'Actress',
    catchPhrase: 'Dodge this!!!'
  },
  {
    name: 'Laurence Fishburne',
    occupation:'Actor',
    catchPhrase: 'Blue or red pill?'
  },
  {
    name: 'Hugo Weaving',
    occupation:'Actor',
    catchPhrase: "Mr. Anderson, you're a disease."
  },
  {
    name: 'Joe Pantoliano',
    occupation:'Actor',
    catchPhrase: "I've rather take the blue pill."
  },
  {
    name: 'Matt Doran',
    occupation:'Actor',
    catchPhrase: 'Did you like the lady in the red dress?'
  },
  {
    name: 'Marcus Chong',
    occupation:'Actor',
    catchPhrase: "I'm 100% old school made."
  }
];

const createCelebrities = celebrities.map(celebrity => {
  const newCelebrity = new Celebrity(celebrity);
    newCelebrity.save()
    .then(celebrityAdded => {
      console.log(`Celebrities added with success:`, celebrityAdded)
    })
    .catch(error => {
      console.log(`Impossible to add celebrity. ${error}`);
    });
})
