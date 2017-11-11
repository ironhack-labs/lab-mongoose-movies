const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {
  useMongoClient: true
});

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrityArray = [{
    name: "santiago segura",
    occupation: "actor",
    catchPhrase: "nos hacemos unas pajillas"
  },
  {
    name: "chiquito de la calzada",
    occupation: "humorista",
    catchPhrase: "Quietorrrr..."
  },
  {
    name: "Jose",
    occupation: "pintor",
    catchPhrase: "Vamooos..."
  }
];

const MovieArray = [{
    title: "Apolo 13",
    genre: "action",
    plot: "Space...................."
  },
  {
    title: "Seven",
    genre: "Triller",
    plot: "Serial killer...................."
  },
  {
    title: "Oceans eleven",
    genre: "action",
    plot: "Banck thief...................."
  }
];

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrityArray, (err, data) => {
  if (err) {
    console.log("Error en seeds.js " + err);
  }
  data.forEach((e) => {
    console.log(e.name + ", " + e.occupation + ", " + e.catchPhrase);
  });
});


Movie.create(MovieArray, (err, data) => {
  if (err) {
    console.log("Error en seeds.js " + err);
  }
  data.forEach((e) => {
    console.log(e.title + ", " + e.genre + ", " + e.plot);
  });
});
