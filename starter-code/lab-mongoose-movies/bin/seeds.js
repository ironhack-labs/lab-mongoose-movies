const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const celebrities = [
  {
      name: "Tom Cruise",
      occupation: "Actor",
      catchPhrase: "I'm a fucker"
  },
  {
      name: "Jerry Seinfeld",
      occupation: "Comedian",
      catchPhrase: "I'm super funny"
    },
  {
      name: "Mike Tyson",
      occupation: "Boxer",
      catchPhrase: "I will bite your ear"
  }
];

const movies = [
  {
      title: "Mission: Imposible",
      genre: "Action",
      plot: "Tom Cruise is a fucker"
  },
  {
      title: "Seinfeld",
      genre: "Comedia",
      plot: "A show about nothing"
    },
  {
      title: "The Boxer",
      genre: "Action",
      plot: "A boxes bites someone's ear"
  }
];

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', { useNewUrlParser: true })
  .then(x => {
    Celebrity.collection.drop().then(() => {
    }).catch(e => console.log(e))
    Celebrity.insertMany(celebrities).then(celebrities => {
      console.log(celebrities);
    }).catch(e => console.log(e))

    Movie.collection.drop().then(() => {
    }).catch(e => console.log(e))
    Movie.insertMany(movies).then(movies => {
      console.log(movies);
    }).catch(e => console.log(e))
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });