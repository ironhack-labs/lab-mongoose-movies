/*module.exports = [
  {
    name: "Vincent Cassel",
    occupation: "Comedian",
    catchPhrase: "I love Brazil"
  },
  {
    name: "Monica Belluci",
    occupation: "Comedian",
    catchPhrase: "beauty is not important"
  },
  {
    name: "Romain Gavras",
    occupation: "Realisator",
    catchPhrase: "I m famous not because my father "
  }
];
/*
celebrity.exists(
  {
    name: "Vincent Cassel",
    name: "Monica Belucci",
    name: "Romain Gavras"
  },
  function(err, result) {
    if (result) {
      console.log(
        "element already exist in the databse , insertion wont be done "
      );
    } else {
      const InsertedValue = celebrity
        .insertMany(data)
        .then(result => {
          console.log("insertion of celebrity is successfull");
          return result;
        })
        .catch(err => console.error(`Failed to insert celebrity: ${err}`));
    }
  }
);
const movie = require("../models/movie.js");
moviesData = [
  {
    title: "movie1",
    genre: "comedy",
    plot: "plot1"
  },
  {
    title: "movie2",
    genre: "horror",
    plot: "plot2"
  },
  {
    title: "movie3",
    genre: "action",
    plot: "plot3 "
  }
];

movie
  .insertMany(moviesData)
  .then(result => {
    console.log("insertion of movie is successfull");
    return result;
  })
  .catch(err => console.error(`Failed to insert movie: ${err}`));
*/
