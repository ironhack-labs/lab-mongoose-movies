require('../configs/db.config.js')
const mongoose = require('mongoose')

const celebrity = require ('../models/celebrity.model');
const moviesModel = require ('../models/movie.model');

const celebrities = [
    { name: 'Tom Cruise', occupation: "actor", catchPhrase: "The prizes are wonderful." },
    { name: 'Beyonce', occupation: "singer", catchPhrase: "I accept my mistakes. They make me who I am." },
    { name: 'Penelope Cruz', occupation: "actress", catchPhrase: "All experiences are positive" },
  ];

const plotJurrassic = `Twenty-two years after what happened in Jurassic Park, Isla Nublar has been transformed 
into a huge theme park, Jurassic Wold, with 'domesticated' versions of some of the best-known dinosaurs. 
When everything seems to go smoothly and be the business of the century, a new dinosaur of unknown species, 
since it has been created by genetically manipulating its DNA, and that turns out to be much smarter than 
previously thought, escapes from its enclosure and begins to wreak havoc on Park visitors.`

const plotInterestellar = `Seeing that life on Earth is coming to an end, a group of explorers led by pilot 
Cooper (McConaughey) and scientist Amelia (Hathaway) undertakes a mission that may be the most important in 
the histor of humanity: travel beyond our galaxy to discover a planet in another that can guarantee the future of the human race`

const plotInto = `In the early 1990s, the young and idealistic Christopher McCandless (Emile Hirsch), 
adopts the names Alexander Supertramp, leaves his possessions and savings to charity, and leaves the civilized 
world for wild Alaska to come into contact with Nature and discover the true meaning of life. 
Adaptation of Jon Krakauer's bestseller, based on McCandless' journal notes.`

const movies = [
    { title: 'Jurassic world', genre: "Science fiction", plot: plotJurrassic},
    { title: 'Interestellar', genre: "Science fiction", plot: plotInterestellar},
    { title: 'Into the wild', genre: "Drama", plot: plotInto},
  ];

celebrity.create(celebrities)
  .then (() => moviesModel.create(movies))
  .then(movies => {
      console.log(`${movies.length} added to the database`);
      mongoose.connection.close()
  })
  .catch(e => console.log('Error: ', e))