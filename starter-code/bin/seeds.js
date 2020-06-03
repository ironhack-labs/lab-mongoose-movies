const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie.js");

const DB_TITLE = "celebrity-db";

mongoose.connect(`mongodb://localhost/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Celebrity.collection.drop();

const celebs = [
  {
    name: "Dave Gahan",
    occupation: "Singer",
    catchPhrase: "it's no good",
  },
  {
    name: "Clinton «Clint» Eastwood Jr",
    occupation: "Actor",
    catchPhrase: "Man becomes more creative during war!",
  },
  {
    name: "Steven Patrick Morrissey",
    occupation: "Singer",
    catchPhrase: "There Is a Light That Never Goes Out!",
  },
];

Celebrity.create(celebs)
  .then((celeb) => console.log("Celebrity database created !"))
  .catch((err) => `An error occurred : ${err}`);

const Movies = [
  {
    title: "La La Land",
    genre: "Musical",
    plot: `While navigating their careers in Los Angeles, a pianist and an actress fall in love`,
  },

  {
    title: "Master and Commander",
    genre: "Adventure",
    plot: `During the Napoleonic Wars, a brash British captain pushes his ship and crew to their limits.`,
  },
  {
    title: "Mulan",
    genre: "Action",
    plot: `A young Chinese maiden disguises herself'`,
  }
];

Movie.create(Movies)
  .then((items) => console.log(`${items.length} have been created`))
  .catch((err) => console.log(`Error occured creating celebrities: ${err}`));
