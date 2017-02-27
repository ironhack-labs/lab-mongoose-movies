const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseMovie');

const Movie = require('../models/movie.js');

const movies = [
  { title: 'Independence Day: Resurgence',
    genre: 'Science fiction',
    plot: 'We always knew they were coming back. After INDEPENDENCE DAY redefined the event movie genre, the next epic chapter delivers global spectacle on an unimaginable scale. Using recovered alien technology, the nations of Earth have collaborated on an immense defense program to protect the planet'
  },
  { title: 'Logan',
    genre: 'Science fiction',
    plot: 'In the near future, a weary Logan (Hugh Jackman) cares for an ailing Professor X (Patrick Stewart) at a remote outpost on the Mexican border. His plan to hide from the outside world gets upended when he meets a young mutant (Dafne Keen)'
  },
  { title: 'Underworld: Blood Wars',
    genre: 'Science fiction',
    plot: 'Vampire death dealer, Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires'
  },
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(`${movie.title} ${movie.genre} ${movie.plot}`);
  });

  mongoose.disconnect();
});
