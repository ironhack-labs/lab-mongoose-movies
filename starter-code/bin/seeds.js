const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Clint Eastwood',
    ocupation: 'actor, director',
    catchPhrase: 'Go ahead... Make my day, punk!'
  },
  {
    name: 'Arnold Schwarzenegger',
    ocupation: 'actor',
    catchPhrase: "I'll be back!"
  },
  {
    name: 'Robert De Niro',
    ocupation: 'actor',
    catchPhrase: "You talkin' to me?"
  },
  {
    name: 'Bruce Willis',
    ocupation: 'actor',
    catchPhrase: "Yippee-Ki-Yay, Motherfucker!"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

const movies = [
  {
    title: 'The Enforcer',
    genre: 'action',
    plot: "San Francisco Inspector 'Dirty' Harry Callahan (Clint Eastwood) must foil a terrorist organization made up of disgruntled Vietnam veterans. But this time, he's teamed with female partner Inspector Kate Moore (Tyne Daly), with whom he's not too excited to be working",
    cast: ['Clint Eastwood', 'Tyne Daly', 'Harry Guardino']
  },
  {
    title: 'Terminator 2: Judgment Day',
    genre: 'action, Sci-Fi',
    plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    cast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong']
  },
  {
    title: 'Taxi Driver',
    genre: 'drama',
    plot: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
    cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd']
  },
  {
    title: 'Die Hard',
    genre: 'action',
    plot: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    cast: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia']
  }
];

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});