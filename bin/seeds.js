const mongoose = require("mongoose");
const Director = require("../models/Director");
const Movie = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/celebrity-project", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

  const directorsList = [
    {
      name: "Barry Jenkins",
      occupation: "Director",
      catchPhrase: "As a writer, a blank page will humble the hell out of you. It always does, and it always will.",
      image: "https://static01.nyt.com/images/2019/01/27/arts/27barry-jenkins1/27barry-jenkins1-articleLarge.jpg",
    },
    {
      name: "Paul Thomas Anderson",
      occupation: "Director",
      catchPhrase: "I'll rebel against powers and principalities, all the time. Always, I will.",
      image: "https://media.gq.com/photos/5a383d755f1f364364dd40f9/master/pass/P.T.%20Anderson-01.jpg",
    },
    {
      name: "Luca Guadagnino",
      occupation: "Director",
      catchPhrase: "I'm incredibly inspired by the goofy edginess of teenagers and young people.",
      image: "https://static.purple.fr/2015/10/003_NB.jpg",
    },
  ];

  Director.create(directorsList);

  const moviesList = [
    {
      title: "Moonlight",
      director: "Barry Jenkins",
      genre: "Drama",
      plot: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
      image: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    },
    {
      title: "Suspiria",
      director: "Luca Guadagnino",
      genre: "Horror",
      plot: "A darkness swirls at the center of a world-renowned dance company, one that will engulf the troupe’s artistic director, an ambitious young dancer and a grieving psychotherapist. Some will succumb to the nightmare, others will finally wake up.",
      image: "https://m.media-amazon.com/images/M/MV5BMjQ2MTIyNjM2MF5BMl5BanBnXkFtZTgwMDE3NDMyNjM@._V1_SY1000_CR0,0,648,1000_AL_.jpg",
    },
    {
      title: "Phantom Thread",
      director: "Paul Thomas Anderson",
      genre: "Romance",
      plot: "Renowned British dressmaker Reynolds Woodcock comes across Alma, a young, strong-willed woman, who soon becomes a fixture in his life as his muse and lover.",
      image: "https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    },
  ];

  // Movie.create(moviesList);