require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const myCelebrity = [{
    name: "Maxime",
    occupation: "Flirt",
    catchPhrase: "Chase!",
  },
  {
    name: "Guillaume",
    occupation: "Play",
    catchPhrase: "F*** the police",
  },
  {
    name: "Seb",
    occupation: "Money",
    catchPhrase: "Benefits",
  }
]

const myMovie = [{
    title: "Maxime's Angels",
    genre: "Horror",
    plot: "A man named Maxime try to make his life but his ex girlfriends have another idea in mind...",
  },
  {
    title: "Fast cops & Furious player",
    genre: "Fantastique",
    plot: "This dude made his game his reality",
  },
  {
    title: "There's something about money",
    genre: "Documentary",
    plot: "If you buy this movie you didn't understand the plot",
  }
]

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    Celebrity.create(myCelebrity)
      .then((dbSuccess) => {
        console.log(dbSuccess);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    Movie.create(myMovie)
      .then((dbSuccess) => {
        console.log(dbSuccess);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });