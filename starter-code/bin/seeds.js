
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/Celebrity', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

const celebrities = [
  {
  name : "DJ Khaled",
  occupation : "DJ",
  catchPhrase : "DJ Khaled!"
  },
  {
  name : "Tiger Woods",
  occupation : "Professional Golfer",
  catchPhrase : "Mr. Steal your girl"
  },
  {
    name : "Rick Ross",
    occupation : "Rapper",
    catchPhrase : "Uhh"
  }
]

Celebrity.create(celebrities)
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
  console.log(err);
});