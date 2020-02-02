const mongoose = require('mongoose');
// const celebrityModel = require("../models/Celebrity")
const movieModel = require("../models/Movie")

const movies = [
    {
        title: "Matrix",
        genre: "Sci-fi",
        plot: "Rebellion against machines",
    },
    {
        title: "007",
        genre: "Action",
        plot: "MI-6 Spy",
    },
]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// celebrityModel.create(celebs)
// .then(success => {
//     console.log("YES IT WORKS");
// })
// .catch(err => {
//     console.error("NOOOOO", err);
// })

movieModel.create(movies)
.then(success => {
    console.log("YES IT WORKS");
})
.catch(err => {
    console.error("NOOOOO", err);
})