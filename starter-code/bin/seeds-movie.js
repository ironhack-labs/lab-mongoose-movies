const {
  withDbConnection,
  dropIfExists
} = require("../withDBConnection.js");
const movie = require("../models/movie");


withDbConnection(async () => {
  await dropIfExists(movie);
  await movie.create([{
      title: "Gladiator",
      genre: "Drama",
      plot: "A man without family fighting against tigers in Italy."
    },
    {
      title: "Joker",
      genre: "Drama",
      plot: "A crazy man that decides to be a comedian and kill people."
    },
    {
      title: "The Dark Knight",
      genre: "Adventure",
      plot: "A crazy super rich man that loves bat costumes."
    }

  ]);
});