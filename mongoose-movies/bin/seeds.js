// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies');
// const Celebrity = require('../models/celebrity-model.js');
//
// const celebrities = [
//   {
//     name: 'Julia Roberts',
//     occupation:'actress',
//     catchPhrase:'Loving what you do is the secret to everything.'
//   },
//   {
//     name:'Robert De Niro',
//     occupation:'actor',
//     catchPhrase:'There are three ways of doing things around here: the right way, the wrong way and the way that I do it.'
//   },
//   {
//     name:'Charles Chaplin',
//     occupation:'actor',
//     catchPhrase:'We think too much and feel too little.'
//   }
// ];
//
// Celebrity.create(celebrities,(err,celebrityList)=>{
//   if (err){
//     throw err;
//   }
//   celebrityList.forEach((oneCelebrity)=>{
//     console.log(`Celebrity ${oneCelebrity.name} -> ${oneCelebrity.catchPhrase}`);
//   });
// });



//--------- Movie seeds.js -----------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');
const Movie = require('../models/movie-model.js');

const movies = [
  {
    title: 'Pretty Woman',
    genre:'comedy',
    plot:'In this modern update on Cinderella, a prostitute and a wealthy businessman fall hard for one another, forming an unlikely pair. While on a business trip in L.A., Edward (Richard Gere), who makes a living buying and breaking up companies, picks up a hooker, Vivian (Julia Roberts), on a lark. After Edward hires Vivian to stay with him for the weekend, the two get closer, only to discover there are significant hurdles to overcome as they try to bridge the gap between their very different worlds.'
  },
  {
    title:'The Godfather II',
    genre:'drama',
    plot:'The compelling sequel to \'The Godfather\', contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917\'s Hell\'s Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.'
  },
  {
    title:'The gold rush',
    genre:'comedy',
    plot:'In this classic silent comedy, the Little Tramp (Charles Chaplin) heads north to join in the Klondike gold rush. Trapped in a small cabin by a blizzard, the Tramp is forced to share close quarters with a successful prospector (Mack Swain) and a fugitive (Tom Murray). Eventually able to leave the cabin, he falls for a lovely barmaid (Georgia Hale), trying valiantly to win her affections. When the prospector needs help locating his claim, it appears the Tramp\'s fortunes may change.'
  }
];

Movie.create(movies,(err,movieList)=>{
  if (err){
    throw err;
  }
  movieList.forEach((oneMovie)=>{
    console.log(`Movie ${oneMovie.title} -> ${oneMovie.genre}`);
  });
});
