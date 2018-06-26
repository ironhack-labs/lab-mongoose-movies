// Fetching models
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

// Connecting to DB
const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

//Data input
const inputValue = [
    {title:"Mission: Impossible - Fallout",
    genre:"Action",
    plot:"Ethan Hunt (Tom Cruise) and his IMF team (Alec Baldwin, Simon Pegg, Ving Rhames) along with some familiar allies (Rebecca Ferguson, Michelle Monaghan) in a race against time after a mission gone wrong. "
    },
    {title:"Uncle Drew",
    genre:"Comedy",
    plot:"After draining his life savings to enter a team in the Rucker Classic street ball tournament in Harlem, Dax (Lil Rel Howery) is dealt a series of unfortunate setbacks"
    },
    {title:"The War of Flowers",
    genre:"Sci-fi",
    plot:"The world is ending and only planting flowers could save the world"
    }
]

// Insert the data into the database
Movie.create(inputValue)
    .then((celebrityResults) => {
    console.log(`Created ${celebrityResults.length} entries in the dataBase`);
})
    .catch((err) => {
    console.log("Create data entries FAIL!")
});