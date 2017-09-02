const mongoose = require('mongoose');

const CelebrityModel = require('../models/celebrities.js');

mongoose.connect('mongodb://localhost/mongoose-movies');


var celebrities = [
  {
    name: "Jack",
    occupation: "Dancer",
    catchPhrase: "The rain is wet"
  },
  {
    name: "Mary",
    occupation: "Actress",
    catchPhrase: "The cameras look at me and I look at them"
  },
  {
    name: "Paul",
    occupation: "Musician",
    catchPhrase: "Let it be"
  }
];

CelebrityModel.create(
  // 1st argument -> array of celebrities to save
  celebrities,

  // 2nd argument -> callback
  (err, success) => {
      if (err) {
          console.log('Wrong!');
          console.log(err);
          return;
      }

      success.forEach(celebrity => {
          console.log('New Celebrity ---> ' + celebrity.name);
      });
  }
);
