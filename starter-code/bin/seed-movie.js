require("dotenv").config();
require("../app.js");
const MovieModel = require("../models/Movie");

const movies = [
  {
    title: "One Flew Over the Cuckoo's Nest",
    genre: "drama",
    plot:
      "In Oregon in the fall in 1963, repeat offender Randle Patrick McMurphy is transferred to a mental institution after serving a few months on a prison farm on charges of assault and statutory rape of a 15-year-old girl. Though not truly mentally ill, McMurphy hopes to avoid hard labor and complete the remainder of his sentence in a more relaxed environment. Upon arriving at the hospital, he finds the ward is being dominated by head nurse Mildred Ratched, a cold, passive-aggressive tyrant who uses her authority to intimidate her patients.",
  },
  {
    title: "Memento",
    genre: "neo-noir psychological thriller",
    plot:
      "The film starts with a Polaroid photograph of a dead man. As the sequence plays backward, the photo reverts to its undeveloped state, entering the camera before the man is shot in the head. The film then continues, alternating between black-and-white and color sequences.",
  },
  {
    title: "Brüno",
    genre: "mockumentary",
    plot: `Gay Austrian fashion reporter Brüno Gehard is fired from his own television show, Funkyzeit mit Brüno (Funkytime with Brüno) after disrupting a Milan Fashion Week catwalk (whose audience included Paul McCartney), and his lover Diesel leaves him for another man. Accompanied by his assistant's assistant, Lutz Schulz, he travels to the United States to become "the biggest Austrian superstar since Hitler"`,
  },
];

async function insertTestMovies() {
  try {
    await MovieModel.deleteMany();
    const insertedMovies = await MovieModel.insertMany(movies);
    console.log("movies seed done !");
    console.log(insertedMovies);
  } catch (err) {
    console.error(err);
  }
}

insertTestMovies();
