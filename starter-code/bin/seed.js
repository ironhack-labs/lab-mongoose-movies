const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return x.connection.dropDatabase();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// const celebrities = [
//     {
//         name: 'Cristiano Ronaldo',
//         occupation: 'footbal player',
//         catchPhrase: 'Siiiiiiiim'
//     },
//     {
//         name: 'John Cena',
//         occupation: 'Actor',
//         catchPhrase: 'You cant see me' 
//     },
//     {   
//         name: 'Michelle Obama',
//         occupation: 'unkown',
//         catchPhrase: 'When they go low, we go high'
//     }
// ];

// Celebrity.create(celebrities)
//     .then(result=>console.log('celebrities seeded succesfully'))
//     .catch(err=> console.log(`Error in seeding celebrities`));

const Movies = [
  {
    title: 'Scarface',
    genre: 'Actions',
    plot: 'Cuban gangster makes money with drugs'
  },
  {
    title: 'Sharknado',
    genre: 'Actions, Thriller',
    plot: 'Tornadoes of Sharks'
  },
  {
    title: 'Jurassic Park',
    genre: 'Actions, Adventure',
    plot: 'Park with dinosaurs'
  }
];

Movie.create(Movies)
  .then(()=>{
    console.log('Success seeding movies' );
    mongoose.connection.close();
  })
  .catch(()=> console.log('error in seeding Movies'));