const mongoose = require("mongoose")
let Movie = require("../models/Movie.js")

//const DB_NAME = 'mongoose-movies';

mongoose
  .connect('mongodb://localhost/mongoose-movies',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

let movies = [
    { 
        title: "Happy Movie", 
        genre: "family movies", 
        plot: "Everyone is very happy, nothing happens." },
    { 
        title: "The Romantic Movie", 
        genre: "Romance", 
        plot: "Bob loves Barny."},
    {
        title: "Intelligence",
        genre: "sci-fi",
        plot: "The Earth has violent visitors from another planet."
    },
  ]

Movie.create(movies)
  .then(() => {
    mongoose.connection.close()
  })
  .catch(() =>{
    console.log("Error. Something went wrong.")
  })

