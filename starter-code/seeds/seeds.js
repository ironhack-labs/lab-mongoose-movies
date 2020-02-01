const withDbConnection = require('../withDbConnection');
const Celebrity = require('../models/celebrity.js');

//Con esta función hacemos que se impriman estos datos en la base de datos
withDbConnection (async () => {
  await Celebrity.deleteMany();
  await Celebrity.create ( [
    { name: "Steve Jobs", occupation: "Apple Founder", catchPhrase:"Connecting the dots" },
    { name: "Harry Potter", occupation: "Hogwart's Student", catchPhrase:"Expelliarmus" },
    { name: "Marc", occupation: "Teacher", catchPhrase:"Ya lo iréis pillando" }
  ])
});

const Movie = require('../models/movie.js');

withDbConnection (async () => {
  await Movie.deleteMany();
  await Movie.create ( [
    { title: "Across The Universe", genre: "Drama", plot:"A story about Vietnam War" },
    { title: "Knives Out", genre: "Comedy", plot:"A story around a murder" },
    { title: "Harry Potter", genre: "SCiFi", plot:"A kid who discovers the world of magic" }
  ])
});


