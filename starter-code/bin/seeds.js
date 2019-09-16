const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const celebrities = [
  {
    name: 'Mike Gold',
    occupation: 'Bank Robber',
    catchPhrase: 'Gimme the gold mate or seal your fate, '},
  {
    name: 'Joe Speeds',
    occupation: 'Stunt Driver',     
    catchPhrase: "Hasta la vista baby"},
  {
    name: 'Mandy Snow',
    occupation: 'Actress',
    catchPhrase: "Let it snow"}
]   

Celebrity.insertMany(initCelebs)
  .then(data => console.log("add successful"))
  .catch(err => {
    console.log("error while adding", err);
  });