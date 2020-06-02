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
    name: "Jennifer Lopez",
    occupation: "Singer",
    catchPhrase: "Hola que tal"
  },
  {
    name: "Leonardo DiCaprio",
    occupation: "Actor",
    catchPhrase: "This water feels cold!"
  },
  {
    name: "Elton John",
    occupation: "Singer",
    catchPhrase: "I'm still standing!"
  }
]

Celebrity.create(celebs)
.then(celeb => console.log("Celebrity database created !"))
.catch(err => `An error occurred : ${err}`)