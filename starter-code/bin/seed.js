require("dotenv").config();
require("./../app.js");
const CelebrityModel = require("./../models/Celebrity");

const celebrities = [
  {
    title: "Kim Kardashian",
    genre: "TV reality star",
    plot: "Bible.",
  },
  {
    title: "Ariana Grande",
    genre: "Singer",
    plot: "Thank you next!",
  },
  {
    title: "Tupac",
    genre: "Singer",
    plot: "People die but legends live forever.",
  },
  {
    title: "Emma Stone",
    genre: "Actress",
    plot: "Grilled cheese makes me feel beautiful!",
  },
  {
    title: "Donald Trump",
    genre: "Unknown",
    plot: "I would give myself an A+.",
  },
  { title: "Rick Sanchez", genre: "Inventor", plot: "Pickle Rick!" },
];

async function insertCelebrities() {
  try {
    await CelebrityModel.deleteMany();
    const inserted = await CelebrityModel.insertMany(celebrities);
    console.log(`seed celebrities done : ${inserted.length} stars inserted!`);
  } catch (err) {
    console.error(err);
  }
}

insertCelebrities();

// ____________________________

require("dotenv").config();
require("./../app.js");
const MovieModel = require("./../models/Movies");

const movies = [
  {
    title: "Titanic",
    genre: "Drama",
    plot: "Jack and Rose fall in love on the Titanic",
  },
  {
    title: "Catch me if you can",
    genre: "Adventure",
    plot: "A teenager imposter escape his family to start news lives",
  },
  {
    title: "Back to the future",
    genre: "Sci-fi",
    plot: "A teenager goes back to change his future",
  },
];

async function insertMovies() {
  try {
    await MoviesModel.deleteMany();
    const inserted = await MoviesModel.insertMany(movies);
    console.log(`seed movies done : ${inserted.length} movies inserted!`);
  } catch (err) {
    console.error(err);
  }
}

insertMovies();
