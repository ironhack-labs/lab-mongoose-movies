const Celebrity = require("../models/Celebrity.model")
const Movie = require("../models/Movie.model")
const firstCelebrities = require("../dataCelebrities")
const firstMovies = require("../dataMovies")
const mongoose = require("mongoose")

//Create Celebrities
//mongoose
//  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true})
//  .then((x) => {
//    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//    return Celebrity.insertMany(firstCelebrities);
//  })
//  .then((celebrities) => {
//      console.log(celebrities.length, "inserted");
//      return mongoose.connection.close();
//  })
//  .then(() => console.log("Connection to database closed"))
//    .catch(error => console.error(error))

//Create Movies
mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true})
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Movie.insertMany(firstMovies);
  })
  .then((movies) => {
      console.log(movies.length, "inserted");
      return mongoose.connection.close();
  })
  .then(() => console.log("Connection to database closed"))
    .catch(error => console.error(error))