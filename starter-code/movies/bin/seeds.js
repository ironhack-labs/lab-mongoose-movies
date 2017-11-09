const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useMongoClient:true});
const Celebrity = require('../model/celebrity');

const celebrity = [
  {
    celebrityName : 'Kim Kardashian',
    occupation : 'actress',
    catchPhrase : 'hola que tal',
  },
  {
    celebrityName : 'Tailor Switt',
    occupation : 'actress',
    catchPhrase : 'buenos dias',
  },
  {
    celebrityName :'Angelina Jolie',
    occupation : 'actress',
    catchPhrase : 'muu bien y tu',
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrity, (err,docs)=>{
  if(err){
    throw err;
  }
  docs.forEach((celebrityItem)=>{
    console.log(celebrityItem.celebrityName);
  })
})
