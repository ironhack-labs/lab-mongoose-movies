require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const celebrities = [
  {
    name: "Sergio Ramos",
    occupation: "footballer",
    catchPhrase: "Pasa illo"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Yeah"
  },
  {
    name: "Belen Esteban",
    catchPhrase: "Me entiendes?"
  }
];
const movies = [
  {
    name: "300",
    genre: "action",
    plot: "spartans"
  },
  {
    name: "I, Robot",
    genre: "sci-fi",
    plot: "robots"
  },
  {
    name: "Frozen",
    genre: "disney",
    plot:"ice"
  }
];


mongoose.connect(
  process.env.DBCELEBRITIES,
  { useMongoClient: true }
);

Celebrity.create(celebrities)
.then(data=>{
    console.log("Celebritites added to DB")
    mongoose.disconnect()
})
.catch(err=>{
    console.log("Error adding celebritites")
    mongoose.disconnect()

})
Movie.create(movies)
.then(data=>{
    console.log("Movies added to DB")
    mongoose.disconnect()
})
.catch(err=>{
    console.log("Error adding movies")
    mongoose.disconnect()

})
