require("dotenv").config();
require("./../configs/db.config");
const CelebrityModel = require("../models/celebrity");
const MovieModel = require("../models/movie");

const celebrities = [
  {
    name: "Leonardo DiCaprio",
    occupation: "Actor",
    catchPhrase: "I'm the king of the world!",
  },
  {
    name: "Kanye West",
    occupation: "Artist",
    catchPhrase:
      "I refuse to do zooms with one person if I have their contact... I’ve got another idea... It's called FaceTime",
  },
  {
    name: "Homer Simpson",
    occupation: "Father",
    catchPhrase: "D'oh!",
  },
];

const movies = [
  {
    title: "The Social Network",
    genre: "Drama",
    plot:
      "Une soirée bien arrosée d'octobre 2003, Mark Zuckerberg, un étudiant qui vient de se faire plaquer par sa petite amie, pirate le système informatique de l'université d'Harvard pour créer un site, une base de données de toutes les filles du campus.",
  },
  {
    title: "Gone Girl",
    genre: "Drama",
    plot: "Test",
  },
];

async function insert() {
  try {
    await CelebrityModel.insertMany(celebrities);
    MovieModel.insertMany(movies);
    console.log("Inserted Celebrities & Movies");
  } catch (err) {
    console.error(err);
  }
}

insert();
