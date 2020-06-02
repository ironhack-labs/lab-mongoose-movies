// File to feed the database

const mongoose = require('mongoose');

const Celeb = require('../models/celebrity');
const Movie = require('../models/movie');

const DB_TITLE = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Celeb.collection.drop();
Movie.collection.drop();

const myCelebs = [
  {
    name: "Ash Ketchum",
    occupation: "Pokémon trainer",
    catchPhrase: "Gotta catch 'em all!"
  },
  {
    name: "Mercè Rodoreda",
    occupation: "Writer",
    catchPhrase: "Les coses importants són les que no ho semblen."
  },
  {
    name: "Katya Zamolodchikova",
    occupation: "Entertainer",
    catchPhrase: "Not everybody needs to be a weirdo."
  }
];

const myMovies = [
  {
    title: "Buffy, the Vampire Slayer",
    genre: "Action, Comedy & Fantasy",
    plot: "Flighty teenage girl Buffy Summers learns that she is her generation's destined battler of vampires."
  },
  {
    title: "Imagine Me & You",
    genre: "Comedy, Drama & Romance",
    plot: "A newlywed bride becomes infatuated with another woman who questions her sexual orientation."
  },
  {
    title: "Back to the Future",
    genre: "Adventure, Comedy & Sci-Fi",
    plot: "Marty McFly is accidentally sent thirty years into the past in a time-traveling DeLorean invented by the eccentric Doc Brown."
  }
]

Celeb.create(myCelebs, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${myCelebs.length} celebrities`);
  mongoose.connection.close();
});

Movie.create(myMovies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${myMovies.length} movies`);
  mongoose.connection.close();
});