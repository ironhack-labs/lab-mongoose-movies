const mongoose = require('mongoose');
const Movie = require('../models/Movie.js')

mongoose
  .connect('mongodb://localhost/lab-celebs', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

movies = [{
    title: "ad astra",
    genre: "Drama, Fantasy",
    plot: "A man journeys across a lawless solar system to find his missing father -- a renegade scientist who poses a threat to humanity."
},
{
    title: "Angel has fallen",
    genre: "Thriller, Action",
    plot: "Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president. Desperate to uncover the truth, he soon turns to unlikely allies to help clear his name and save the country from imminent danger."
},
{
    title: "Good Boys",
    genre: "Adventure, Comedy",
    plot: "Three 6th grade boys ditch school and embark on an epic journey while carrying accidentally stolen drugs, being hunted by teenage girls, and trying to make their way home in time for a long-awaited party."
}]


Movie.create(movies)