const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celeb-app');
const Celebrity = require('../model /celebrity.js');

const celebs = [{
  name: 'Arnold Schwarzenegger',
  occupation: 'Proffesional Bodybuilder',
  catchPhrase: 'NOW GET TO THE CHOPAAAA!! GET DOWN GET DOWN!!'
},
{
  name: 'Eddie Murphy',
  occupation: 'Comedian & Actor',
  catchPhrase: 'I will moonwalk all up and down your ass mothaf***er!'
},
{
  name: 'Will Smith',
  occupation: 'Comedian & Actor',
  catchPhrase: 'If you dont want a sarcastic answer. Then dont ask stupid questions!'
}
];

Celebrity.create(celebs,(err, docs) => {
  if (err) {
    next(err);
  }

  docs.forEach((oneCeleb) =>{
    console.log(`${oneCeleb.name}
      ${oneCeleb._id}`);
  });

  mongoose.disconnect();
});
