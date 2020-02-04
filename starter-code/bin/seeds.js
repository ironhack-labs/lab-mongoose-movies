const celebrities = [
  {
    name: "Beyonce",
    occupation: "singer",
    catchphrase: "Put a ring on it"
  },
  {
    name: "Jay-Z",
    occupation: "rapper",
    catchphrase: "I got 99 problems"
  },
  {
    name: "Alfonso",
    occupation: "TA",
    catchphrase: "All good in the hood"
  }
];

const movies = [
  { title: "test1", genre: "test1", plot: "test1" },
  { title: "test2", genre: "test2", plot: "test2" },
  { title: "test3", genre: "test3", plot: "test3" }
];

let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/celebrity-lab", () => {
  console.log("connected");
});

let Celebrity = require("../models/Celebrity");

Celebrity.collection.drop();

Celebrity.create(celebrities)
  .then(res => {
    console.log("created");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });

let Movie = require("../models/Movie.js");

Movie.collection.drop();

Movie.create(movies)
  .then(res => {
    console.log("created");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
