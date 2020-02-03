const celebrityModel = require("./../models/CelebrityModel");
const movieModel = require("./../models/MovieModel")
const mongoose = require("mongoose");

const testCelebrities = [
  {
    name: "Megan Thee Stallion",
    occupation: "Rapper",
    catchPhrase: "Hot Girl Summer",
  },
  {
    name: "Pony Park",
    occupation: "Make-up Artist",
    catchPhrase: "It's Pony Park",
  },
  {
    name: "Toto",
    occupation: "Unknown",
    catchPhrase: "My name is Toto",
  }
];

const testMovies = [
  {
    title:"Diamonds",
    genre:"Action",
    plot:"xxxxxx"
  },
  {
    title:"Tutorial",
    genre:"Documentary",
    plot:"yyyyyy"
  },
  {
    title:"Foo",
    genre:"Bar",
    plot:"Baz"
  }
]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  // celebrityModel.insertMany(testCelebrities)
  // .then(dbSuccess => {
  //   console.log("celebrities inserted sucessfully", dbSuccess)
  // })
  // .catch(dbError => {
  //   console.log("error while inserting data", dbError)
  // })

  movieModel.insertMany(testMovies)
  .then(dbSuccess => {
    console.log("movies inserted sucessfully", dbSuccess)
  })
  .catch(dbError => {
    console.log("error while inserting data", dbError)
  })