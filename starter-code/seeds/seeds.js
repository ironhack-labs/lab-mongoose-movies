const withDbConnection = require('../withDbConnection');
const Celebrity = require('../models/celebrity.js');

//Con esta función hacemos que se impriman estos datos en la base de datos
withDbConnection (async () => {
  await Celebrity.deleteMany();
  await Celebrity.create ( [
    { name: "Steve Jobs", occupation: "Developer", catchPhrase:"Connecting the dots" },
    { name: "Harry Potter", occupation: "Hogwart's Student", catchPhrase:"Expelliarmus" },
    { name: "Marc", occupation: "Teacher", catchPhrase:"Ya lo iréis pillando" }
  ])
});

const Movie = require('../models/movies.js');

withDbConnection (async () => {
  await Movie.deleteMany();
  await Movie.create ( [
    { title: "Movie1", genre: "Drama", plot:"Connecting the dots" },
    { title: "Movie2", genre: "Comedy", plot:"Connecting the dots" },
    { title: "Movie3", genre: "SCiFi", plot:"Connecting the dots" }
  ])
});


