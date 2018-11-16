const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
const Movies = require("../models/movie.js");


mongoose.connect(`mongodb://localhost/celebrities`, { useNewUrlParser: true } );
mongoose.connect(`mongodb://localhost/movies`, { useNewUrlParser: true } );


const celebrities = [
  {
    name: "Daniel Craig",
    occupation: "Actor",
    catchPhrase: "The name is Bond, James Bond"
  },
  {
    name: "Woody",
    occupation: "Toy Story character",
    catchPhrase: "You're my favorite deputy!"
  },
  {
    name: "Lady Gaga",
    occupation: "Singer",
    catchPhrase: "Im obsessively opposed to the typical"
  }
];


Celebrity.collection.drop();
Celebrity.create(celebrities)
  .then(() => console.log("Celebs created on DB"))
  .then(() => mongoose.disconnect());



  const movies = [
    {
      title: "El padrino",
      genre: "Drama",
      plot: "plot1"
    },
    {
      title: "La lista de Schindler",
      genre: "Drama",
      plot: "plot2"
    },
    {
      title: "Pulp Fiction",
      genre: "Thriller",
      plot: "plot3"
    }
  ];

Movies.collection.drop();
Movies.create(movies)
  .then(() => console.log("Movies created on DB"))
  .then(() => mongoose.disconnect());