const mongoose     = require('mongoose');
const movies  = require('../models/movies')

mongoose
  .connect('mongodb://localhost/celebrity', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const movieArray = [
  {
    title: "Mission impossible",
    genre: "Action",
    plot: "Special agent completed an impossible mission"
  },
  {
    title: "Matrix",
    genre: "Action",
    plot: "The world is a simulation, people are used as a batteries"
  },
  {
    title: "Cowspiracy",
    genre: "Documentary",
    plot: "Highlighting a better way to sustainable living"
  },

]


movies.create(movieArray)
.then(()=> {

  console.log(`Yey, movies added to DB`);
}
)
.catch(()=> {

  console.log(`Nay, movies were NOT added to DB`);
})