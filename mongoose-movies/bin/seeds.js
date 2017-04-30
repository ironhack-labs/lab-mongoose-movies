const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');
const Celebrity = require('../models/celebrity-model.js');

const celebrities = [
  {
    name: 'Julia Roberts',
    occupation:'actress',
    catchPhrase:'Loving what you do is the secret to everything.'
  },
  {
    name:'Robert De Niro',
    occupation:'actor',
    catchPhrase:'There are three ways of doing things around here: the right way, the wrong way and the way that I do it.'
  },
  {
    name:'Charles Chaplin',
    occupation:'actor',
    catchPhrase:'We think too much and feel too little.'
  }
];

Celebrity.create(celebrities,(err,celebrityList)=>{
  if (err){
    throw err;
  }
  celebrityList.forEach((oneCelebrity)=>{
    console.log(`Celebrity ${oneCelebrity.name} -> ${oneCelebrity.catchPhrase}`);
  });
});
