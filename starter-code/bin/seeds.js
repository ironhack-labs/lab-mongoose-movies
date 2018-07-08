//require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const moviesAndCelebsApp = process.env.DBURL;  //en archivo env llama al fichero creado en compass
mongoose.connect('mongodb://localhost/moviesAndCelebs');


const celebrities = [
  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchPhrase: "Stupid is as stupid does."
  },
  {
    name: "Christian Bale",
    occupation: "Actor",
    catchPhrase: "Something horrible is happening inside of me and I don’t know why."
  },
  {
    name: "Anthony Hopkins",
    occupation: "Actor",
    catchPhrase: "Ate His Liver"
  }
]

const movies = [
  {
    title: "Memento",
    genre: "Thriller",
    plot: "Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time."
  },
  {
    title: "The Godfather",
    genre: "Gangster",
    plot: "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen."
  },
  {
    title: "The Matrix",
    genre: "Fiction",
    plot: "A programmer is brought back to reason and reality when learning he was living in a program created by gigantic machines which make human birth artificial. In order to set humanity free, Neo will have to face many enemies by using technologies and self-trust."
  }
];

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log('Created ${celebrities.lenght} celebrities');
  mongoose.connection.close()
})

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log('Created ${movies.lenght} movies');
  mongoose.connection.close()
})