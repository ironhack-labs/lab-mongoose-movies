/*jshint esversion:6*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebritiesList');
const Celebrity = require('../models/celebrity');

const celebrityInfo = [{
    name: 'Uma Thurman',
    occupation: 'Actress',
    catchPhrase: 'Dying sleeping is a luxury that our species rarely allows'
  },
  {
    name: 'Michael Jordan',
    occupation: 'Sportman',
    catchPhrase: 'Some people want it to happen, others cause it, others make it happen'
  },
  {
    name: 'William Shakespeare',
    occupation: 'Writer',
    catchPhrase: 'Conscience is but a word that cowards use, devised at first to keep the strong in awe'
  }
];


Celebrity.create(celebrityInfo, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((doc) => {
    console.log(doc.name);
  });
  mongoose.connection.close();
});
