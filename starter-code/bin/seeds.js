const mongoose = require('mongoose');

const Celeb = require('../models/Celebrity.model');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const stars = [
    {
        name: "Steven Seagal",
        occupation: "actor",
        catchPhrase: "never enough lame fight scenes"
    },
    {
        name: "Chuck Norris",
        occupation: "actor",
        catchPhrase: "I'll kill death before it kills me"
    },
    {
        name: "Jean-Claude Van Damme",
        occupation: "actor",
        catchPhrase: "if it fits, splits"
    }
]


Celeb.create(stars)
  .then(celebs => {
    console.log(`Created ${celebs.length} stars`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities in the DB: ${err}`));
