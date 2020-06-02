
const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity')

const DB_TITLE = 'celebrity-db';

mongoose.connect(`mongodb://localhost/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Celebrity.collection.drop();

const celebs = [
  {
    name: "Dave Gahan",
    occupation: "Singer",
    catchPhrase: "it's no good"
  },
  {
    name: "Clinton «Clint» Eastwood Jr",
    occupation: "Actor",
    catchPhrase: "Man becomes more creative during war!"
  },
  {
    name: "Steven Patrick Morrissey",
    occupation: "Singer",
    catchPhrase: "There Is a Light That Never Goes Out!"
  }
]

Celebrity.create(celebs)
.then(celeb => console.log("Celebrity database created !"))
.catch(err => `An error occurred : ${err}`)