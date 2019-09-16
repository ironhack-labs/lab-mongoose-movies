const mongoose = require('mongoose');
const Celeb = require('../models/Celeb.js')

mongoose
  .connect('mongodb://localhost/lab-celebs', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

celebrities = [{
    name: "Bill Burr",
    occupation: "Comedian",
    catchPhrase: "I'm not going to lie. I am a psycho. Luckily, I get most of it out on stage."
},
{
    name: "Tom Cruise",
    occupation: "Scientologist",
    catchPhrase: "Individuals have to decide what is true and real for them."
},
{
    name: "Bill CLinton",
    occupation: "Politician",
    catchPhrase: "I did not have sexual relations with that woman."
}]


Celeb.create(celebrities)