
const Celebrity = require ("../models/Celebrity");
const mongoose     = require('mongoose');

mongoose
  .connect('mongodb://localhost/seed', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

function seedDatabase () {

const array = [
  {name: "Vladimir Putin" , occupation: "Prime Minister", catchPhrase: "We will invade Europe" },
  {name:  "Jose Socrates" , occupation: "Unemployed", catchPhrase: "I never lied in my life" },
  {name: "Cristiano Ronaldo" , occupation: "Football Player", catchPhrase: "UUUUUUUUU" }
]


// Creating Celebrities


Celebrity.create(array)
  .then(() => {
    { console.log("The celebrity is saved ") 
  })

  .catch(error => {
     console.log("An error happened") 
    });

})


