const mongoose = require(`mongoose`);
mongoose.connect(`mongodb://localhost/movie-db`);
const Celebrity = require(`../models/celebrity`);
const Movie = require(`../models/movie`)

const movies = [
  {
    title     : `Independence Day`,
    genre     : `Sci-Fi`,
    plot      : `Will Smith and Jeff Goldum jack up some aliens with a Windows 95-era PC virus. Bill Pullman gives a good fake speech.`
  },
  {
    title     : `The Departed`,
    genre     : `Crime Drama`,
    plot      : `Leo DiCaprio, Jack Nicholson, Matt Damon, and Marky Mark curse a lot.`
  },
  {
    title     : `Jerry McGuire`,
    genre     : `Sports? Romance?`,
    plot      : `Tom Cruise is a sports agent for Cuba Gooding Jr, who honestly should have had a better career cause he's great here but WHATEVER.`
  }
]

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.title);
  });
});

const celebrities = [
  {
    name        : "Will Smith",
    occupation  : "Actor",
    catchPhrase : "Welcome to *****"
  },
  {
    name        : "Leo DiCaprio",
    occupation  : "Actor",
    catchPhrase : "I'm king of the world!"
  },
  {
    name        : "Tom Cruise",
    occupation  : "Actor",
    catchPhrase : "Thetans are real."
  },
]

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});