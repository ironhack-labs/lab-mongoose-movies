const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model");

mongoose.Promise = Promise;
mongoose
.connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
.then(() => {
console.log('Connected to Mongo!')
}).catch(err => {
console.error('Error connecting to mongo', err)
});

const celebrities = [
    {
        name: "Nizaroni",
        occupation: "Competitor for the world's most famous pizza eater",
        catchPhrase: "...and futur grandmaster of express generator debugging"
    },
    {
        name: "Arthur",
        occupation: "Competitor for the world's most beautiful beard",
        catchPhrase: "...and futur model for a short trousers new brand"
    },
    {
        name: 'Vivian',
        occupation: "Competitor for the world's most lovely TA",
        catchPhrase: "... and futur Dating App Zuckerberg"
    }
  ];

Celebrity.create(celebrities)
  .then( () => {
      console.log(`Created ${celebrities.length} celebrities`);
  })
  .catch( (err) => {
      console.log(`Error connecting to mongo`, err);
  });