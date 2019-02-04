const mongoose = require ('mongoose');
mongoose.connect ('mongodb://localhost/starter-code');

const Celebrity = require ('../models/celebrity');

const celebrities = [
  {
    name: 'Michael Jackson',
    occupation: 'King of Pop',
    catchPhrase: 'Auuuuuu!',
  },
  {
    name: 'Freddie Mercury',
    occupation: 'Queen',
    catchPhrase: 'Show must go on!',
  },
  {
    name: 'Elvis Presley',
    occupation: 'King of Rock and Roll',
    catchPhrase: 'Mississipi',
  },
  {
    name: 'Bob Marley',
    occupation: 'Reegae master',
    catchPhrase: 'Weeeeee',
  },
];

Celebrity.insertMany (celebrities)
  .then (() => {
    console.log ('Created');
  })
  .catch (error => {
    console.log (error);
  });
