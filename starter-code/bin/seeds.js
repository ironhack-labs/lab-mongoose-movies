//add par AV
require("dotenv").config();
require("./../config/database");
const celebrityModel = require("./../models/celebrity");
const movieModel = require("./../models/movie");

const mongoose = require("mongoose");

// const DB_NAME = "starter-code";

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Nabilla Vergara",
    occupation: "Unknown",
    catchPhrase: "Allô ! Non mais, allô quoi !",
  },
  {
    name: "Nicole Kidman",
    occupation: "Actress",
    catchPhrase: "Hey, what did you expect ?",
  },
  {
    name: "George Clooney",
    occupation: "Actor",
    catchPhrase: "What else ?",
  },
];

celebrityModel
  .insertMany(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while getting celebrities from the DB: ${err}`
    )
  );

const movies = [
  {
    title: "Le dîner de cons",
    genre: "Comedie",
    plot: "Marvellous Jacques Villeret",
  },
  {
    title: "Retour vers le futur",
    genre: "SF",
    plot: "Going in the past to save the future with a cool Dolorean",
  },
  {
    title: "Inception",
    genre: "Thriller",
    plot: "Dream in a dream in a dream... in a dream",
  },
];

movieModel
  .insertMany(movies)
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} movies`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting movies from the DB: ${err}`)
  );

// In the create method's callback, display feedback ??? OK ???
