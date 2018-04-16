require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrities_data = require("./celebrity_data");
const Movie = require("../models/Movie");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL);
Celebrity.collection.drop();
Movie.collection.drop();

const createMovies = celebrities_data.map(celebrity => {
  const newMovie = new Movie(celebrity.movie);
  return newMovie
    .save()
    .then(movie => {

      return movie.title;
    })
    .catch(error => {
      throw new Error(`Impossible to add the author. ${error}`);
    });
});

let findMovies = Promise.all(createMovies)
  .then(movies => {
    return celebrities_data.map(celebrity => {
      return Movie.findOne({ title: celebrity.movie.title }).then(movie => {
        if (!movie) {
          throw new Error(`unknown movie `);
        }
        return Object.assign({}, celebrity, { movie: movie._id });
      });
    });
  })
  .catch(error => {
    throw new Error(error);
  });

const saveCelebrities = findMovies
  .then(findMovies => {
    return Promise.all(findMovies).then(celebrities => {
      return celebrities.map(celebrity => {
        const newCelebrity = new Celebrity(celebrity);
       
        return newCelebrity.save();
      });
    });
  })
  .then(savedCelebrities => {
    Promise.all(savedCelebrities)
      .then(celebrities => {
        celebrities.forEach(celebrity => console.log(`created`));
      })
      .then()
      //si no pongo esto en comentarios => cierra la base
      //de datos antes de hacer la inserción de
      // mongoose.connection.close()
      
      .catch(err => console.log("papu", err));
  });
