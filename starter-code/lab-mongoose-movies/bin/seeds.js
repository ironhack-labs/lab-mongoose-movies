require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = process.env.DBURL;
mongoose.connect(dbName);

const celebrities = [
  {
    name: "Nicolas Cage",
    occupation: "actor",
    catchPhrase: "Sorry boss, but there is only two men I trust. One of them is me. The other is not you."
  },
  {
    name: "Robert De Niro",
    occupation: "actor",
    catchPhrase: "Time goes on. So whatever you are going to do, do it. Do it now. Do not wait"
  },
  {
    name: "Bob Marley",
    occupation: "singer",
    catchPhrase: "The good times of today, are the sad thoughts of tomorrow"
  }
]

const movies = [
  {
    title : "The Leisure Seeker",
    genre: "Drama",
    plot: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
  },
  {
    title : "Black Panther",
    genre: "Action",
    plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
  },
  {
    title : "Red Sparrow",
    genre: "Comedy",
    plot: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
   
  },
]

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
});

Movie.create(movies, (err, data) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`);
});