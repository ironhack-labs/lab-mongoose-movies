const app = require('../app');
const celebritiesModel = require('../models/celebrity');
const moviesModel = require('../models/movie');

const listCelebrities = [
  {
    name: 'Buzz Ligthyear',
    occupation: 'Galactic Toy',
    catchPhrase: 'To infinity and beyond',
  },
  {
    name: 'Al Pacino',
    occupation: 'Actor',
    catchPhrase: 'That role was mine for the taking but I couldn\'t understand the script',
  },
  {
    name: 'Clint Eastwood',
    occupation: 'Actor',
    catchPhrase: 'You have to trust your instincts. There\'s a moment when an actor has it, and he knows it.',
  },
];

celebritiesModel.create(listCelebrities)
  .then(data => console.log('Data added', data))
  .catch(error => console.log('Couldn\'t add files', error));

const listMovies = [
  {
    title: 'De perdidos al río',
    genre: 'Drama',
    plot: 'Intergalactic drama show',
  },
  {
    title: 'Condemor de la pradera',
    genre: 'Thriller',
    plot: 'Top level cowboy movie',
  },
  {
    title: 'Apocalipsis Samurai',
    genre: 'Comedy',
    plot: 'Life in a fallout Samurai style Vegas',
  },
];


moviesModel.create(listMovies)
  .then(data => console.log('Data added', data))
  .catch(error => console.log('Couldn\'t add files', error));
