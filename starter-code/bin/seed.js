const Movie = require("../models/movie.js");
const Celebrity = require("../models/celebrity.js");

const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/mongoose-movies")

const movies = [
  {
    title: "Super Movie 3",
    genre: ["Drama", "Suspense", "Romance"],
    plot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eaque tempora? Maiores quod quo suscipit ipsa debitis minima accusantium ratione, dignissimos enim minus unde ex necessitatibus impedit eligendi libero sit?"
  },
  {
    title: "Crazy Feature Film",
    genre: ["Explosions", "Action", "Mindfuck"],
    plot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eaque tempora? Maiores quod quo suscipit ipsa debitis minima accusantium ratione, dignissimos enim minus unde ex necessitatibus impedit eligendi libero sit?"
  },
  {
    title: "Cute Animation Short",
    genre: ["Cuteness", "Humor", "Tragedy"],
    plot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eaque tempora? Maiores quod quo suscipit ipsa debitis minima accusantium ratione, dignissimos enim minus unde ex necessitatibus impedit eligendi libero sit?"
  }
];

const celebrities = [
  {
    name: "Jade Gordashian",
    occupation: "Gold Digger",
    catchPhrase: "Prapare for the divorce lawsuit"
  },
  {
    name: "Tom Rappanur",
    occupation: "Silicon Valley Entrepreneur",
    catchPhrase: "Give me a line"
  },
  {
    name: "Ca.$$H",
    occupation: "Rich white trash rapper",
    catchPhrase: "My bitches, my hoes, my bitches, my hoes"
  },
]


Movie.create(movies)
  .then(() => console.log("Movies collection seeded"))
  .then(() => Celebrity.create(celebrities))
  .then(() => console.log("Celebrities collection seeded"))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err))