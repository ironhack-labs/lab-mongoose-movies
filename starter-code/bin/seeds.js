const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

// require database configuration
require("../configs/db.config");

const celebrities = [
  {
    name: "Julio Iglesias",
    occupation: "singer",
    catchPhrase: "I am a lover for sure. I love to be loved",
  },
  {
    name: "Donald Trump",
    occupation: "undefined",
    catchPhrase: "Flattering of the curve",
  },
  {
    name: "Denzel Washington",
    occupation: "actor",
    catchPhrase:
      "Be careful what you ask for because when you pray for rain, you have to deal with the mud as well.",
  },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating books: ${err}`)
  );

const seedMovies = [
  {
    title: `Toy Story`,
    genre: "Animation",
    plot: 'You"ve got a friend in me',
  },
  {
    title: `The Godfather`,
    genre: "Drama",
    plot: "We will make him and offer, he will not refuse",
  },
  {
    title: `Scarfase`,
    genre: "Drama",
    plot: "You wanna f*ck with me?",
  },
];

Movie.create(seedMovies)
  .then((dbMovies) => {
    console.log(`Created ${dbMovies.length} movies`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating movies in the DB: ${err}`)
  );
