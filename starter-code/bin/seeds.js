
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

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

const movies = [
  {
  name : "blah",
  occupation : "anotherblah",
  catchPhrase : "third blah"
  },
  {
  name : "Tibvhdjs",
  occupation : "Profvdaer",
  catchPhrase : "Mvdarl"
  },
  {
    name : "Rivdass",
    occupation : "Rddder",
    catchPhrase : "Ubfds"
  }
]

Celebrity.create(celebrities)
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
  console.log(err);
});
Movie.create(movies)
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
  console.log(err);
});