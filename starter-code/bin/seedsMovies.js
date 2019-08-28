const mongoose = require("mongoose");
const Movies = require("../models/Movies");

const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const movies = [
  {
    title: "Thank You for Smoking",
    genre: "Action",
    plot: "test 1"
  },
  {
    title: "Catch Me If You Can",
    genre: "Comedy",
    plot: "test 2"
  },
  {
    title: "You Only Live Twice",
    genre: "Adventure",
    plot: "test 3"
  },
  {
    title: "10 Things I Hate About You",
    genre: "Crime",
    plot: "test 4"
  }
];

Movies.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${Movies.length} movies`);
  mongoose.connection.close();
});
