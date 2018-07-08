require('dotenv').config();

const mongoose  = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie     = require('../models/movie');

//mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useMongoClient: true});
mongoose.connect(`mongodb://localhost/lab-mongoose-movies`);

const celebrities = [
  {
    name: 'Chiquito de la Calzada',
    occupation: 'Comedian',
    catchPhrase: 'Pecador de la pradera'
  },
  {
    name: 'Gila',
    occupation: 'Comedian',
    catchPhrase: '¿Es el enemigo?'
  },
  {
    name: 'Eugenio',
    occupation: 'Comedian',
    catchPhrase: 'Saben aquel que diu'
  }
]

Celebrity.collection.drop()

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

//mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useMongoClient: true});
mongoose.connect(`mongodb://localhost/lab-mongoose-movies`);

const movies = [
  {
    title: 'Karate a muerte en Torremolinos',
    genre: 'Comedy',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis tincidunt arcu vel vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pretium tellus ut enim mollis mollis. Curabitur vulputate massa risus, ut fringilla velit commodo ut. Donec bibendum gravida maximus. Vestibulum lacinia ornare magna id imperdiet. Duis quis convallis enim. Nunc sit amet nulla non lacus cursus dapibus blandit id nisl. Suspendisse nibh eros, euismod ac ante nec, tristique viverra lectus. Etiam nec risus venenatis, congue nunc sed, faucibus urna. Duis sit amet elementum massa.'
  },
  {
    title: 'The Room',
    genre: 'Drama',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis tincidunt arcu vel vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pretium tellus ut enim mollis mollis. Curabitur vulputate massa risus, ut fringilla velit commodo ut. Donec bibendum gravida maximus. Vestibulum lacinia ornare magna id imperdiet. Duis quis convallis enim. Nunc sit amet nulla non lacus cursus dapibus blandit id nisl. Suspendisse nibh eros, euismod ac ante nec, tristique viverra lectus. Etiam nec risus venenatis, congue nunc sed, faucibus urna. Duis sit amet elementum massa.'
  },
  {
    title: 'R.O.T.O.R.',
    genre: 'Action',
    plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis tincidunt arcu vel vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pretium tellus ut enim mollis mollis. Curabitur vulputate massa risus, ut fringilla velit commodo ut. Donec bibendum gravida maximus. Vestibulum lacinia ornare magna id imperdiet. Duis quis convallis enim. Nunc sit amet nulla non lacus cursus dapibus blandit id nisl. Suspendisse nibh eros, euismod ac ante nec, tristique viverra lectus. Etiam nec risus venenatis, congue nunc sed, faucibus urna. Duis sit amet elementum massa.'
  }
]

Movie.collection.drop()

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});
