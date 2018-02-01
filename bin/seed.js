// Seed file

require("../config/mongoose-setup");


// import the product model to do product queries
const movieModel = require("../models/movie-model");


const moviestarInfo = [
  {
    name: "Rick James",
    occupation: "singer",
    catchPhrase: "I'm Rick James ......"
  },
  {
    name: "Tom Jolie",
    occupation: "actor-hybrid",
    catchPhrase: "Not applicable"
  },
  {
    name: "Samuel L. Jackson",
    occupation: "actor",
    catchPhrase: "Explicit speech therapy phrase"
  },

];


// db.products.insertMany(productInfo)
movieModel.create(moviestarInfo)
  .then((movieResults) => {
      console.log(`Inserted ${movieResults.length} products`);
  })
  .catch((err) => {
      console.log("Product insert error!");
      console.log(err);
  });
