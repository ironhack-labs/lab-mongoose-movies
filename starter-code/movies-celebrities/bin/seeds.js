require("../config/mongoose-setup");


const MovieModel = require("../models/movies");

const movieInfo = [
    {
      title: "Crazy Driver",
      genre: "Comedy",
      plot:"A taxi driver that kidnapps poor people for fun and takes them to live a luxury week"
    },
    {
      title: "Fake Spy",
      genre: "Action, Fiction",
      plot: "A mercenary that steals a spy identity for killing the Cuba President"
    },
    {
      title: "Bye Baby",
      genre: "Drama",
      plot: "A girl who loses the love of her life"
    }
];

MovieModel.create(movieInfo)
    .then((movieResults) => {
        console.log(`Inserted ${movieResults.length} movies`);
    })
    .catch((err) => {
      console.log("Product insert error!");
      console.log(err);
    });
