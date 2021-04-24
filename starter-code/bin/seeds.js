const mongoose = require('mongoose');
const Celebrity = require("../models/celebrity")

const someCelebrities = [
  { 
    name: "David Gilmour",
    occupation: "Musician",
    catchPhrase: "How I wish you were here."
  },
  { 
    name: "Christian Bale",
    occupation: "Actor",
    catchPhrase: "I can do anything"
  },
  { 
    name: "Adele",
    occupation: "Singer",
    catchPhrase: "Hello, it's me!"
  }
]

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.create(someCelebrities)
      .then(resCreateSeeds => {
        console.log(`Seeds created: ${resCreateSeeds}`);

        mongoose.connection.close();
      })
      .catch(seedsError => console.error(`ERROR creating seeds: ${seedsError}`))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });