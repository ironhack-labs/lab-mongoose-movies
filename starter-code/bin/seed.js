const Celebrity = require('./../models/celebrity');

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const initialCelebrity = [
    {
        name: "Sara",
        occupation: "actor",
        catchPhrase: "I love drawing"
    },
    {
        name: "Beyonce",
        occupation: "actor",
        catchPhrase: "Music"
    },
    {
        name: "Tom Cruise",
        occupation: "actor",
        catchPhrase: "Movie"
    }
];

Celebrity.create(initialCelebrity)
.then(data=>{
    console.log("celebrities added", data);
})
.catch(error => {
    console.log("Error adding initial celebrities.")
})


