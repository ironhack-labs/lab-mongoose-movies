const mongoose = require("mongoose");
const Movie = require("../models/movie");
const Celebrity = require("../models/celebrity");

const dbtitle = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbtitle}`);

// Movie.collection.drop();
// Celebrity.collection.drop();

const movies = [
  {
    title: "First Movie",
    genre: "Romance",
    plot: "Man meets woman. They fall in love.",
    celebrity: {
      name: "Luise",
      occupation: "Actress",
      catchPhrase: "I win every Oscar"
    }
  },
  {
    title: "Second Movie",
    genre: "Science Fiction",
    plot: "People living in a space ship are attacked by aliens.",
    celebrity: {
      name: "Axel",
      occupation: "Influencer",
      catchPhrase: "I influence everything"
    }
  },
  {
    title: "Third Movie",
    genre: "Comedy",
    plot: "A lot of funny things happening.",
    celebrity: {
      name: "Jen",
      occupation: "Singer",
      catchPhrase: "Lalaland"
    }
  }
];

const createCelebrities = movies.map(movie => {
  const newCelebrity = new Celebrity(movie.celebrity);
  // console.log("new celebrity");
  return newCelebrity
    .save()
    .then(celebrity => {
      return celebrity.name;
    })
    .catch(error => {
      throw new Error(`Impossible to add the celebrity. ${error}`);
    });
});

let findCelebrities = Promise.all(createCelebrities)
  .then(celebrities => {
    return movies.map(movie => {
      return Celebrity.findOne({
        name: movie.celebrity.name,
        occupation: movie.celebrity.occupation
      }).then(celebrity => {
        if (!celebrity) {
          throw new Error(
            `unknown celebrity ${movie.celebrity.name} ${
              movie.celebrity.occupation
            }`
          );
        }
        return Object.assign({}, movie, { celebrity: celebrity._id });
      });
    });
  })
  .catch(error => {
    throw new Error(error);
  });

const saveMovies = findCelebrities
  .then(findCelebrities => {
    return Promise.all(findCelebrities).then(movies => {
      return movies.map(movie => {
        const newMovie = new Movie(movie);
        return newMovie.save();
      });
    });
  })
  .then(savedMovies => {
    Promise.all(savedMovies)
      .then(movies =>
        movies.forEach(movie => console.log(`created ${movie.title}`))
      )
      // .then(mongoose.connection.close())
      .catch(err => console.log("papu", err));
  });
