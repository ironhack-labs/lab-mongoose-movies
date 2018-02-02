// Iteration #1
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

mongoose.connect("mongodb://localhost/celebrity-dev").then(() => console.log("Conectado"));

const celebrity = [
  { name: 'John', occupation: 'actor', catchPhrase: 'Hello world' },
  { name: 'James', occupation: 'singer', catchPhrase: 'I am fine' },
  { name: 'Maria', occupation: 'comedian', catchPhrase: 'Well done' }
]

Celebrity.collection.drop();

celebrity.forEach( c => {
  let cel = new Celebrity(c);
  cel.save((err, celeb) => {
    if(err){
      throw err;
    }
    console.log(`Celebrity guardada ${celeb.name}`);
   // mongoose.disconnect();
  })
});