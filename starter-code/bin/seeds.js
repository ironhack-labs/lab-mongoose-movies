const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');


mongoose
  .connect("mongodb://localhost/starter-code", {useNewUrlParser: true })
  .then(x => {
    //limpiar la coleccion
    Celebrity.collection.drop();
    Celebrity.create([
      {
        name: "Mickey Mouse",
        occupation: "Ava DuVernay",
        catchPhrase: ""
      },
      {
        name: "Donald Duck",
        occupation: "Ava DuVernay",
        catchPhrase: ""
      },
      {
        name: "Harry Potter",
        occupation: "Ava DuVernay",
        catchPhrase: ""
      }
    ])
    .then(celebrityInserted =>{
      console.log(celebrityInserted);
      mongoose.disconnect();
    })
    .catch(err =>{
      console.log(err);
    })
  console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Err connecting to mongo', err)
});


// const mongoose = require('mongoose');
// const Movie = require('../models/Movie');


// mongoose
//   .connect("mongodb://localhost/starter-code", {useNewUrlParser: true })
//   .then(x => {
//     //limpiar la coleccion
//     Movie.collection.drop();
//     Movie.create([
//       {
//         title: "The imitation game",
//         genre: "historical non-ficcion",
//         plot: "Breaking enigma"
//       },
//       {
//         title: "Harry Potter",
//         genre: "Fantasy",
//         plot: "boy with scar"
//       },
//       {
//         title: "Jungle Book",
//         genre: "Fantasy animation",
//         plot: "Boy without clothes"
//       }
//     ])
//     .then(movieInserted =>{
//       console.log(movieInserted);
//       mongoose.disconnect();
//     })
//     .catch(err =>{
//       console.log(err);
//     })
//   console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`)
// })
// .catch(err => {
//   console.error('Err connecting to mongo', err)
// });