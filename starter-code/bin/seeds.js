require('dotenv').config();

const mongoose = require('mongoose');
const Celeb = require('../models/Celeb');
const Movie = require('../models/Movie');

// const dbName = process.env.DBURL;
mongoose.connect("mongodb://localhost/moviesAndCelebsApp", {useMongoClient: true});

const celebs = [
  {
  name: "Beyonce",
  occupation: "Singer",
  catchPhrase: "Cause if you liked it, then you should have put a ring on it."
  },
  {
  name: "Kim Kardashian",
  occupation: "Reality Star",
  catchPhrase: "OKURRR"
  },
  {
  name: "Angelina Jolie",
  occupation: "Actor",
  catchPhrase: "I've been reckless, but I'm not a rebel without a cause."
  },
  {
  name: "Ellen Degeneres",
  occupation: "TV Personality",
  catchPhrase: "Be kind to one another."
  },
  {
  name: "Jennifer Lopez",
  occupation: "Singer",
  catchPhrase: "You get what you give. What you put into things is what you get out of them."
  },
  {
  name: "Katy Perry",
  occupation: "Singer",
  catchPhrase: "If you're presenting yourself with confidence, you can pull off pretty much anything."
  },
  {
  name: "Brad Pitt",
  occupation: "Actor",
  catchPhrase: "You must loose everything in order to gain anything."
  },
  {
  name: "Johnny Depp",
  occupation: "Actor",
  catchPhrase: "I think the thing to do is enjoy the ride while you're on it."
  },
];

const movies = [
  {
  title: "The Shawshank Redemption",
  genre: "Drama",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
  title: "The Godfather",
  genre: "Crime",
  plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
  title: "The Dark Knight",
  genre: "Action",
  plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
  title: "Fight Club",
  genre: "Drama",
  plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more."
  },
  {
  title: "Forrest Gump",
  genre: "Drama",
  plot: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
  },
  {
  title: "Inception",
  genre: "Sci-Fi",
  plot: "Inception is a movie starring Leonardo DiCaprio, Joseph Gordon-Levitt, and Ellen Page. A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
  title: "Se7en",
  genre: "Crime",
  plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
  title: "The Silence of the Lambs ",
  genre: "Thriller",
  plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
  },
];


Celeb.collection.drop();
Movie.collection.drop();

Celeb.create(celebs, (err) =>{
  if (err) {
    throw(err)
  }
  console.log('Celeb created');
  mongoose.disconnect();
})

Movie.create(movies, (err) =>{
  if (err) {
    throw(err)
  }
  console.log('Movie created');
  mongoose.disconnect();
})