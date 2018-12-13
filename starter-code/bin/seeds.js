const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/Movie");


const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Do what you love"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "Don't worry, be happy"
  },
  {
    name: "Paddington Bear",
    occupation: "Fictional character",
    catchPhrase: "After the rain, the Fine weather"
  }
];

const movies = [
    {
      title: "Advengers 4",
      genre: "Action",
      plot: "SF"
    },
    {
      title: "Aquaman",
      genre: "Adventure",
      plot: "Super Hero"
    },
    {
      title: "Robin des bois",
      genre: "Action",
      plot: "Adaptation de roman"
    }
  ];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

Movie.create(movies, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  });
  