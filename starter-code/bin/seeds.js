// Iteration #1
const mongoose        = require('mongoose');
const Movie       = require('../models/Movie.model.js')

const DB_NAME       = 'starter-code'


mongoose.connect(`mongodb://localhost/${DB_NAME}`,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const movies = [
    { title: 'Howl no Ugoku Shiro', genre: 'Animation', plot: 'The film tells the story of a young, content milliner named Sophie who is turned into an old woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.' },
    { title: 'White Chicks', genre: 'Comedia', plot: 'Two FBI agent brothers, Marcus (Marlon Wayans) and Kevin Copeland (Shawn Wayans), accidentally foil a drug bust. As punishment, they are forced to escort a pair of socialites (Maitland Ward, Anne Dudek) to the Hamptons, where theyre going to be used as bait for a kidnapper.' },
    { title: 'Deadpool 2', genre: 'Comedia', plot: 'Deadpool debe proteger a Russell, un adolescente mutante, de Cable, un soldado del futuro genéticamente modificado. Deadpool se alía con otros superhéroes para poder derrotar al poderoso Cable.' },
  ];

  Movie.create(movies)
  .then(allMovies => {
      console.log(`Created ${allMovies.length} movies`);

      mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));


/*
// Iteration #1
const mongoose        = require('mongoose');
const Celebrity       = require('../models/Celebrity.model.js')

const DB_NAME       = 'starter-code'


mongoose.connect(`mongodb://localhost/${DB_NAME}`,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const celebrities = [
    { name: 'Ariana Grande', occupation: 'Actrees and singer', catchPhrase: 'Many battles are lost But youll never see the end of the road' },
    { name: 'Jennie', occupation: 'Rapper, singer, model, dancer and MC', catchPhrase: 'Watch your mouth when you speak my name' },
    { name: 'Dylan Sprouse', occupation: 'Actor', catchPhrase: 'Im a people person. Thats my bread and butter' }
  ];

  Celebrity.create(celebrities)
  .then(allCelebrities => {
      console.log(`Created ${allCelebrities.length} celebrities`);

      mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
  */