const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

const Celebrity = require('../models/celebrity');

const celebData = [
  {name: 'Morgan Freeman', occupation: 'Actor', catchPhrase: 'Whatevvah!'},
  {name: 'Donald Trump', occupation: 'Fake-President', catchPhrase: 'This is fake news!'},
  {name: 'Karl XVI Gustav', occupation: 'King', catchPhrase: 'Vad tervlit at träfs!'}
];

Celebrity.create(celebData, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    mongoose.disconnect();
});
