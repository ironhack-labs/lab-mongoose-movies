const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/celebrity';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo: ', err);
  });

const celebs = [
  {
    name: 'Noga Erez',
    occupation: 'Musician',
    catchPhrase: 'Im off the radar',
  },
  {
    name: 'Snoop Dogg',
    occupation: 'Rapper',
    catchPhrase: 'Drop it like its hot!',
  },
  {
    name: 'Tyler the Creator',
    occupation: 'Musician',
    catchPhrase: 'I dont know...',
  },
  {
    name: 'Keanu Reeves',
    occupation: 'Actor',
    catchPhrase: 'Whats the Matrix?!$€',
  },
  {
    name: 'Elliot Page',
    occupation: 'Actor',
    catchPhrase: 'I have no idea!',
  },
];

Celebrity.create(celebs)
  .then((dbCelebs) => {
    console.log(`Created ${dbCelebs.length} new Celebrities!`);
    mongoose.connection.close();
  })
  .catch((error) =>
    console.log(
      `An error occurred while creating fake users in the DB: ${error}`
    )
  );
