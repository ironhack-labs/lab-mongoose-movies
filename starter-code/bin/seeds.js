const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");
const Movie = require("../models/movie.model");

const celebrities = [
  {
    name: "Elon Musk",
    occupation: "Enterpreneur",
    catchPhrase: "We are going to Mars",
  },
  {
    name: "Till Lindemann",
    occupation: "Singer",
    catchPhrase: "Du hast mich?",
  },
  {
    name: "MC Hammer",
    occupation: "Singer",
    catchPhrase: "Can't touch this",
  },
];

const movies = [
  {
    title: "The back of those who didnt go",
    genre: "Comedy",
    plot:
      "Two brothers plan to go on a trip, but they give up and return back home from their house's porch.",
  },
  {
    title: "As tranças do careca",
    genre: "Action",
    plot:
      "Um careca de tranças fará de tudo para reaver seus cabelos, mesmo que isso cause um paradoxo",
  },
  {
    title: "John Wicked",
    genre: "Action",
    plot: "The same as John Wick, but dumb",
  },
];

mongoose
  .connect("mongodb://localhost/starter-code", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // -----------------------------
  // .then((self) => {
  //   console.log(`Connected to the database: "${self.connection.name}"`);
  //   // Before adding any documents to the database, let's delete all previous entries
  //   return self.connection.dropDatabase();
  // })
  .then(async (x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    try {
      const celebrityResult = await Celebrity.create(celebrities);
      const movieResult = await Movie.create(movies);
      console.log(
        `Seeded the database with ${celebrityResult.length} celebrities!`
      );
      console.log(celebrityResult);
      console.log(`Seeded the database with ${movieResult.length} movies!`);
      console.log(movieResult);
      await mongoose.connection.close();
    } catch (err) {
      console.error(err);
    }
  })
  .catch((err) => console.error("Error connecting to mongo", err));
