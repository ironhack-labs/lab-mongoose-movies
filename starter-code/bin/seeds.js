const mongoose   = require('mongoose');
const Celeb = require('../models/celebrity')
const Movie = require('../models/movies');
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // const celebArr = [
  //   {
  //     name: "Brad Pitt",
  //     occupation: "Actor",
  //     catchPhrase: "Hell Yea"
  //   },
  //   {
  //     name: "Lebron James",
  //     occupation: "Athlete",
  //     catchPhrase: "King"
  //   },
  //   {
  //     name: "Kanye West",
  //     occupation: "Rapper",
  //     catchPhrase: "God"
  //   }
  // ]

  // Celeb.create(celebArr)
  // .then(()=>{
  //   console.log('yay')
  // })
  // .catch(()=>{
  //   console.log("m");
  // })
  
  const movieArr=[
    {
      title: "The Hunger Games 7",
      genre: "Action/Adventure",
      plot: "Katniss Everdeen is back again, for the seventh time."
    },
    {
      title: "Pineapple Express 2",
      genre: "Comedy",
      plot: "More fun, more action"
    },
    {
      title: "The Godfather 4",
      genre: "Drama",
      plot: "Al Pacino is old now"
    }
  ];

  Movie.create(movieArr)
  .then(()=>{
    console.log('yay')
  })
  .catch(()=>{
    console.log("m");
  })