const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const dbName = "celebrities-project";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchPhrase: "Run forest, run!"
  },
  {
    name: "James Bond",
    occupation: "Action Hero",
    catchPhrase: "Geschüttelt, nicht gerührt"
  },
  {
    name: "Frank Sinatra",
    occupation: "Singer",
    catchPhrase: "New York, New York"
  }
];

Celebrity.create(celebrity, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrity.length} celebrity`);
  mongoose.connection.close();
});

const movie = [
  {
    title: "Ironhack Movie",
    genre: "Documentary",
    plot: "Code, Code & Code"
  },
  {
    title: "Sommermärchen",
    genre: "Sports",
    plot: "World championship in Germany"
  },
  {
    title: "Skyfall",
    genre: "Action",
    plot: "My name is Bond, James Bond"
  }
];

Movie.create(movie, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movie.length} movie`);
  mongoose.connection.close();
});
