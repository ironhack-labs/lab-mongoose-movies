require("dotenv").config();

let mongoose = require("mongoose");
let Celebrity = require("../models/Celebrity");
let Movie = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/mongooseMovies", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

let celebrities = [
  {
    name: "David Bowie",
    occupation: "singer",
    catchphrase: "Ground control to Mayor Tom"
  },
  {
    name: "Quentin Tarantino",
    occupation: "film director",
    catchphrase: "The more blood the merrier"
  },
  {
    name: "Bill Nye",
    occupation: "science communicator",
    catchphrase: "Save the World!"
  }
];

let movies = [
  {
    title: "Interestellar",
    genre: "Sci-Fi Thriller",
    plot:
      "In Earth’s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth’s population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind’s new home."
  },{
    title:"Django Unchained",
    genre:"Tarantino Western",
    plot:'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South’s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django’s long-lost wife (Kerry Washington) is still a slave.'
  }
];

// Celebrity.create(celebrities)
// .then(celebs=>{
//   console.log(celebs)
//   mongoose.connection.close()
// })
// .catch(e=>{console.log(e)})

Movie.create(movies)
.then(mov=>{
  console.log(mov)
  mongoose.connection.close()
})
.catch(e=>{console.log(e)})
