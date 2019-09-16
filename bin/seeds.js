const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/celebrity-project", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

  const celebsList = [
    {
      name: "Mariah Carey",
      occupation: "elusive chanteuse",
      catchPhrase: "I don't know her.",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/honoree-mariah-carey-performs-onstage-during-the-2019-news-photo-1567793047.jpg",
    },
    {
      name: "Solange Knowles",
      occupation: "dreamer, oracle",
      catchPhrase: "Do nothing without intention",
      image: "https://media.wmagazine.com/photos/5820ab976c6e10fd162f70f7/4:3/w_1536/GettyImages-621447922.jpg",
    },
    {
      name: "Nina Simone",
      occupation: "revolutionary prophet",
      catchPhrase: "I'll tell you what freedom means to me: 'no fear'. I mean really, NO FEAR!",
      image: "https://www.smdp.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-20-at-1.56.01-PM-1.png",
    },
  ];

  // Celebrity.create(celebsList);

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

  Movie.create(moviesList);