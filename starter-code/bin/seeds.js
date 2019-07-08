// const mongoose     = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// mongoose
//   .connect('mongodb://localhost/celebrityDB', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

//   const celebrityArray = [
//     {
//       name: "Robert DeNiro",
//       occupation: "Actor",
//       catchPhrase: "Are you talkin to me? You must be talkin to me. I'm the only one here.",
//     },
//     {
//       name: "Joe Pesci",
//       occupation: "Actor",
//       catchPhrase: "Funny how? I'm funny like a clown? I amuse you? I'm here to amuse you?",
//     },
//     {
//       name: "Al Pacino",
//       occupation: "Actor",
//       catchPhrase: "Fly pelican, fly!",
//     }
//   ]

//   Celebrity.create(celebrityArray)
//   .then(()=>{
//     console.log('yay');
//   })
//   .catch(()=>{
//     console.log('noooo');    
//   })


const mongoose     = require('mongoose');
const Movie = require('../models/Movie');

mongoose
  .connect('mongodb://localhost/celebrityDB', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const movieArray = [
    {
      title: "Taxi Driver",
      genre: "Drama",
      plot: "Taxi drivers loses his mind and acts like a crazy person.",
    },
    {
      title: "Goodfellas",
      genre: "Drama",
      plot: "Gangsters do drugs and kill people, then one rats them all out.",
    },
    {
      title: "Scarface",
      genre: "Action",
      plot: "Cuban refugee becomes cocaine kingpin, has weird relationship with sister, kills best friend, fights Bolivian drug overlord, dies.",
    }
  ]

  Movie.create(movieArray)
  .then(()=>{
    console.log('yay');
  })
  .catch(()=>{
    console.log('noooo');    
  })

