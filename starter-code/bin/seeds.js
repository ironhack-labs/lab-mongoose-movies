const mongoose = require('mongoose');
const CelebrityModel = require('../models/celebrity');
const MovieModel = require('../models/movie');


const dbtitle = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrities = [
  {
    name: 'Awesome Guy',
    occupation: 'being awesome',
    catchPhrase: 'You will never be as awesome as me',
  },
  {
    name: 'Bad Guy',
    occupation: 'being bad',
    catchPhrase: 'You will never be as bad as me',
  },
  {
    name: 'Cool Guy',
    occupation: 'being cool',
    catchPhrase: 'You will never be as cool as me',
  },
];

CelebrityModel.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

const movies = [
  {
    title: 'Action movie',
    genre: 'action',
    plot: 'lights, camera, action!',
  },
];

MovieModel.create(movies, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
