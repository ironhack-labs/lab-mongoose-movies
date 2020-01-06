// bin/seeds.js

const mongoose = require('mongoose');
const Book = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
    name: "Beyoncé",
    occupation: "Singer",
    cathPhase: "I’m flawless!",
  },

  {
    name: "Emma Watson",
    occupation: "Actress",
    cathPhase: "Girls should never be afraid of being smart.",
  },

  {
    name: "Taylor Swift",
    occupation: "Singer",
    cathPhase: "I'm sorry, the old Taylor can't come to the phone right now",
  },
]

celebrity.create(celebrities)
.then(celebrities => {
  console.log('congratulations');
  mongoose.connection.close();
})

.catch(error => console.log(error));