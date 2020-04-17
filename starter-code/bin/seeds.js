require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movies = require("../models/movies.js");
// const celebrities = [
//   {
//     name: "Al Pacino",
//     occupation: ["Actor"],
//     catchPhrase: "Say hello to my little friend",
//   },
//   {
//     name: "Robert De Niro",
//     occupation: ["Actor"],
//     catchPhrase: "What ? You talking to me?",
//   },
//   {
//     name: "Kanye West",
//     occupation: ["Singer"],
//     catchPhrase: "I don't know what's better gettin' laid or gettin' paid.",
//   },
// ];

const movies = [
  {
    title: "Scarface",
    genre: "Crime",
    plot:
      "Tony Montana and his close friend Manny, build a strong drug empire in Miami. However as his power begins to grow, so does his ego and his enemies, and his own paranoia begins to plague his empire.",
  },
  {
    title: "Star Wars",
    genre: "Sci-fi",
    plot: `Star Wars is an American epic space-opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[b] The franchise holds a Guinness World Records title for the "Most successful film merchandising franchise".[2] In 2020, the total value of the Star Wars franchise was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time."`,
  },
  {
    title: "Taxi Driver",
    genre: "Drama",
    plot:
      "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
  },
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((self) => {
    Movies.create(movies)
      .then((dbResponse) => {
        console.log(dbResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
