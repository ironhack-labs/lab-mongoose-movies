const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const seed = [
//     {name: "Will Smith",
//      occupation: "Actor",
//      catchPhrase: "Being realistic is the most common path to mediocrity."
//     },
//     {name: "Tom Cruise",
//      occupation: "Actor",
//      catchPhrase: "No dream is ever just a dream."
//     },
//     {name: "Al Pacino",
//      occupation: "Actor",
//      catchPhrase: "I always tell the truth, even when I lie."
//     }
// ];

// const movies = [
// {
//   "title": "The Prestige",
//   "year": 2006,
//   "director": "Christopher Nolan",
//   "genre": ["Drama","Mystery","Sci-Fi","Thriller"],
//   "plot": "No século 19, em Londres, dois amigos ilusionistas e mágicos, Alfred Borden e Rupert Angier, acabam construindo uma rivalidade, uma batalha por supremacia, que se estende ao longo dos anos e que se transforma em obsessão, cujos resultados serão inevitavelmente trágicos."
// },
// {
//   "title": "The Lion King",
//   "year": 1994,
//   "director": "Roger Allers",
//   "duration": "1h 28min",
//   "genre": [{"0":"Animation"},"Adventure","Drama","Family","Musical"],
//   "plot": "Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar."

// },
// {
//   "title": "Memento",
//   "year": 2000,
//   "director": "Christopher Nolan",
//   "duration": "1h 53min",
//   "genre": ["Mystery","Thriller"],
//   "plot": "Leonard está caçando o homem que estuprou e matou sua esposa. Ele tem dificuldades em encontrar o assassino pois sofre de uma forma intratável de perda de memória. Mesmo que ele possa lembrar detalhes da vida antes do acidente, Leonard não consegue lembrar o que aconteceu quinze minutos atrás, onde está indo ou a razão."
// }];

// Celebrity.insertMany(seed, function(error, docs){
//     console.log(docs);
//     console.log(error);
//     mongoose.connection.close();
// });

// Movie.insertMany(movies, function(error, docs){
//     console.log(docs);
//     console.log(error);
//     mongoose.connection.close();
// });

console.log(mongoose);





