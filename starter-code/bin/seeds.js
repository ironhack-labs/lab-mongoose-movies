const mongoose = require('mongoose')
require('../app.js')

const Celebrity = require('../models/Celebrity');

const celebrities = [
    {
      name: 'Michael Fassbender',
      occupation: 'actor',
      catchPhrase: 'Big things have small beginnings',
    },
    {
      name: 'Tom Hanks',
      occupation: 'actor',
      catchPhrase: `If it wasn't hard, everyone would do it. It's the hard that makes it great`,
    },
    {
      name: 'Ricky Gervais',
      occupation: 'comedian',
      catchPhrase: 'Be happy. It really annoys negative people',
    }
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  Celebrity.deleteMany({})
  .then (() => Celebrity.create(celebrities))
  .then(celebrities => console.log(`${celebrities.length} added to the database`, celebrities))
  .catch(e => console.log('Error: ', e))
  // ... your code here