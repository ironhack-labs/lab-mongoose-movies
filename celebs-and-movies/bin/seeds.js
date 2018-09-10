const mongoose = require('mongoose');

const Movie = require('../models/Movie');
// const Celebrity = require('../models/Celebrity');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebs-and-movies', {useMongoClient: true})
  .then(() => {

    movies = [
      {title: "The Room", genre: "Bad Movie", plot: "Guy finds out girl is cheating on him with his best friend and then he kills himself"},
      {title: "Doug The Dog", genre: "Dog Movie", plot: "Doug gets turned into a dog and does dog things"},
      {title: "Ode to Code", genre: "Romantic comedy", plot: "Guy programs his computer to be his girlfriend"}
    ]



// const tomCruise = {name: "Tom Cruise", occupation: "Crazy Guy Movie Star", catchphrase: "I'm not crazy"}

// const angelina = {name: "Angelina Jolie", occupation: "She used to be in movies", catchphrase: "I'm angelina jolie"}

// const stormTroop = {name: "Storm Trooper", occupation: "Missing shots", catchphrase: "Oh no, I missed!"}

// const owenWilson = {name: "Owen Wilson", occupation: "Saying wow", catchphrase: "wow!"}

// Celebrity.create([tomCruise, angelina, stormTroop, owenWilson])


    Movie.create(movies)
    .then((movies)=>{
      console.log(`Created ${movies.length} movies`)
      mongoose.connection.close();
    })

    .catch((err)=>{
      console.log(err)
    })

    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})


.catch(err => {
    console.error('Error connecting to mongo', err)
  });

