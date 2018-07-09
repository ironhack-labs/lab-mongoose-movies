require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("../models/movie");

//const dbName = process.env.DBURL;

mongoose.connect("mongodb://localhost/lab-mongoose-movies", {useMongoClient: true});

const movies = [
  {
    title: "Pulp Fiction",
    genre: "Thriller",
    plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "Braveheart",
    genre: "Drama",
    plot: "When his secret bride is executed for assaulting an English soldier who tried to rape her, Sir William Wallace begins a revolt against King Edward I of England."
  },
  {
    title: "A Few Good Men",
    genre: "Thriller",
    plot: "Military lawyer Lieutenant Daniel Kaffee defends Marines accused of murder. They contend they were acting under orders."
  },
  {
    title: "Legends of the Fall",
    genre: "Drama",
    plot: "In the early 1900s, three brothers and their father living in the remote wilderness of Montana are affected by betrayal, history, love, nature, and war."
  },
  {
    title: "Dracula",
    genre: "Drama",
    plot: "The centuries old vampire Count Dracula comes to England to seduce his barrister Jonathan Harker's fiancée Mina Murray and inflict havoc in the foreign land."
  },
];
Movie.collection.drop();

Movie.create(movies, (err, data) => {
  if (err) {throw (err)}
  console.log("Data created!!!!");
  mongoose.disconnect();
});
