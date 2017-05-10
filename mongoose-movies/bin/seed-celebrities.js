const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost:27017/movies');

const celebrities = [
  {
    name: "Snoop Dogg",
    occupation: "rapper",
    catchPhrase: "Fo shizzle",
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "Bootylicious",
  },
  {
    name: "Charlie Sheen",
    occupation: "actor",
    catchPhrase: "Duh, winning",
  },
  {
    name: "Arnold Schwarznegger",
    occupation: "actor",
    catchPhrase: "Hasta la vista, baby",
  },
];




Celebrity.create(celebrities, (err, docs)=>{
  if (err) throw err;
  docs.forEach((celebrity)=>{
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
