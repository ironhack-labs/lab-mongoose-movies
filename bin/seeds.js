const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseMovies');

const Celebrity = require ('../models/celebrity.js');

const celebrities = [
  {
    name:'Matt Damon',
    occupation: "Jason Borne",
    catchPhrase: "Who am I?",
  },
  {
    name:'Tom Cruise',
    occupation: "Scientologist",
    catchPhrase: "Nothing is impossible.",
  },
  {
    name:'Jared Leto',
    occupation: "Jesus",
    catchPhrase: "Never playing The Joker agian.",
  },
];

Celebrity.create(celebrities, (err, docs)=>{
  if (err){
    throw err;
  }
  docs.forEach((oneCelebrity)=>{
    console.log(`${oneCelebrity.name} ${oneCelebrity._id}`);
  });
  mongoose.disconnect();
});
