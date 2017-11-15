// Seed file
// A program to insert new documents into the database on demand.
//
// Fixes a couple of problems:
// 1) You don't have to manually enter products when you delete them.
// 2) You can quickly get a lot of documents by running it multiple times.

// run the Mongoose setup code in our script
require("../config/mongoose-setup");


// import the product model to do product queries
const MovieModel = require("../models/movie-model");


const movieInfo = [
  {
    nameActor: 'Salchi John',
    occupation:'Mercenary',
    catchphrase:'My nombre es John Salchi John',
  },
  {
    nameActor: 'Harry El Sucio Potter',
    occupation:'Wizard',
    catchphrase:'Estudiame estaa',
  },
  {
    nameActor: 'El Bananero',
    occupation:'youtuber',
    catchphrase:'El bananero soy yo!',
  }

];


// db.products.insertMany(productInfo)
MovieModel.create(movieInfo)
  .then((movieResults) => {
      console.log(`Inserted ${movieResults.length} movies`);
  })
  .catch((err) => {
      console.log("Movie insert error!");
      console.log(err);
  });
