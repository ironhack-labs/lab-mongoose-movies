const mongoose  = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Crazy Guy Movie Star",
    catchphrase: "I'm crazy!", 
  },
  {
    name: "Angelina Jolie",
    occupation: "I used to work",
    catchphrase: "I don't know what I do anymore", 
  },
  {
    name: "Kate Winslet",
    occupation: "Actress",
    catchphrase: "I am in a ton of movies usually", 
  }
]

const movies = [
  {
    title: "The Spy Who Dumped Me",
    genre: "Romantic Comedy",
    plot: "2 funny chicks don't know how to be spies." 
  },
  {
    title: "The Nun",
    genre: "Psychological Thriller",
    plot: "A nun psychologically thrills an audience of scared people." 
  },
  {
    title: "The Wife",
    genre: "Drama",
    plot: "Judi Dench plays a wife. It's intense." 
  }
]

Movie.create(movies)
    .then((movies)=>{
    console.log(`Created ${movies.length} movies`)
    })

    .catch((err)=>{
    console.log(err)
    })


Celebrity.create(celebrities)
    .then((celebrities)=>{
    console.log(`Created ${celebrities.length} celebrities`)
    })

    .catch((err)=>{
    console.log(err)
    })