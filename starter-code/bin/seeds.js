const mongoose = require('mongoose');
// Import the model

const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

// Server URI
const MONGODB_URI = 'mongodb://localhost:27017/moviesDB';

// Establish mock data
const seedDataC = [
  {
    name: 'Elon Musk',
    occupation: 'Entrepreneur',
    catchPhrase: "I'm bored",
  },
  { name: 'Solid Snake', occupation: 'mass murderer', catchPhrase: 'keep you waiting, huh?' },
  {
    name: 'COVID-19 Patien zero',
    occupation: 'exotic animal smuggler',
    catchPhrase: 'mmm bat soup!',
  },
];

const seedDataM = [
  {
    title: 'death in the subway',
    genre: 'terror',
    plot: 'death',
  },
  { title: 'crying ppl', genre: 'drama', plot: 'people' },
  {
    title: 'love',
    genre: 'romance',
    plot: 'peploe make love </3',
  },
];

// seed the database "recipe-app"
const populateDB = async () => {
  await mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected to the "${mongoose.connection.name}" database`);
  await mongoose.connection.dropDatabase();
  console.log(`Dadatabase droped`);
  await Celebrity.insertMany(seedDataC);
  console.log(`Dadatabase polupate with ${seedDataC}`);
  await Movie.insertMany(seedDataM);
  console.log(`Dadatabase polupate with ${seedDataM}`);
  await mongoose.disconnect();
};

populateDB().catch((error) => console.error(error));
