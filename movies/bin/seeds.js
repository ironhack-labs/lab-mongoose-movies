// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebmovi');


const Celebrity = require('../models/modelForCelebrity.js');
const celebrities = [
  { nameCelebrity: 'Robert DeNiro', occupation: 'actor and director', catchPhrase:"Are you talking to me?" },
  { nameCelebrity: 'Harrison Ford', occupation: 'actor and director', catchPhrase:"Fortune and glory, kid. Fortune and glory." },
  { nameCelebrity: 'Joaquim Sabina', occupation: 'singer and composer', catchPhrase:"There is no more life luxury than living without phone or car" },
];
  // db. .insertMany()
Celebrity.create(celebrities, (err, celebrityDocs) => {
  if (err) {
    throw err;
  }
  celebrityDocs.forEach((oneCeleb) => {
    console.log(`NEW Celebrity ${oneCeleb.nameCelebrity} -> ${oneCeleb.occupation} -> ${oneCeleb.catchPhrase} `);
  });
  mongoose.disconnect();
});
