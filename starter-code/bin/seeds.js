require("dotenv").config();
const mongoose = require("mongoose")

//DB
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
//

const MovieModel = require("../models/movies");

const movies = [
  {
    title: "American Beauty",
    genre: "Drama",
    plot:
      "The Burnhams. Seems like a perfect family. A quiet little life in a quiet little suburb. However, appearances are deceptive, and beneath the surface the Burnhams are bubbling with frustrations and hidden desires. When Lester falls in love with one of his daughter's friends, the delicate balance is upset and the family implodes.",
  },
  {
    title: "Shinning",
    genre: "Horror",
    plot:
      "Jack Torrance, caretaker of a hotel closed in the winter, his wife and son Danny are about to live long months of solitude. Danny, who possesses a gift of psychic, the Shining, is afraid to live in this place, a theater marked by terrible past events...",
  },
  {
    title: "OSS 117, Lost in Rio",
    genre: "Comedy",
    plot:
      "Launched on the tracks of a compromising microfilm for the French state, the most famous of our agents will have to team up with the most attractive of the 'Mossad' lieutenant colonels to capture a Nazi blackmailer. From the sunny beaches of Rio to the lush rainforests of the Amazon, from the deepest secret caves to the top of the Christ of Corcovado, a new adventure begins.",
  },
];

MovieModel.create(movies)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.error(dbErr));
