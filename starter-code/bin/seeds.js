const celebrities = [
  {
      name : "Leonardo Di Caprio",
      occupation: "Actor",
      catchPhrase: "Save the world"
  },
  {
      name : "Michael Phelps",
      occupation: "Swimmer",
      catchPhrase: "No pain no gain"
  },
  {
      name : "John Cena",
      occupation: "Wrestler",
      catchPhrase: "U cant see me"
  }
]

const movies=[
{
  title: "Wolf of Wallstreet",
  genre: "Comedy",
  plot: "A wolf in Wallstreet wolfing around"
},
{
  title: "The best swimmer",
  genre: "Drama",
  plot: "A swimmer is swimming in a swimming pool"
},
{
  title: "The big Fight",
  genre: "Action",
  plot: "A fighter is fighting fights for fighters"
}
]

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')
//const Celebrity = require('../models/celebrity.model');
//const celebrities = require('./bin/seeds');

mongoose
.connect('mongodb://localhost/starter-code', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(self => {
  console.log(`Connected to the database: "${self.connection.name}"`);
  // Before adding any documents to the database, let's delete all previous entries
  //return self.connection.dropDatabase();
})
.then(() => {
  //Celebrity.insertMany(celebrities)
  Movie.insertMany(movies)
  .then(console.log("Success"))
  .catch(err => console.log(err))
})
.catch(err => console.log("Error connecting to database"))