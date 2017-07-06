const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-movies')
  .then(() => {
    // let celebritiesArray = [{
    //     name: 'Lila',
    //     occupation: 'Corner singer',
    //     catchFrase: 'you better not take my spot',
    //   },
    //   {
    //     name: 'Melina',
    //     occupation: 'porn star',
    //     catchFrase: 'better inside than out',
    //   },
    //   {
    //     name: 'Luke',
    //     occupation: 'celebrity clown',
    //     catchFrase: 'partys make me sad',
    //   },
    // ];
    //
    // Celebrity.create(celebritiesArray, (err, celebs) => {
    //   if (err) {
    //     throw err;
    //   }
    //
    //   celebs.forEach( celebrity => {
    //     console.log(`you have added a new celebrity: ${celebrity.name}`);
    //   });

    let moviesArray = [{
        title: 'I know what you did last bootcamp',
        genre: 'terror',
        plot: 'After an accident on a winding road, four teens make the fatal mistake of dumping their victims body into the sea. But exactly one year later, the dead man returns from his watery grave and hes looking for more than an apology.',
      },
      {
        title: 'BootOver',
        genre: 'comedy',
        plot: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
      },
      {
        title: 'web dev Bootcamp: your first time',
        genre: 'drama',
        plot: 'Four teenage boys enter a pact to lose their virginity by prom night.',
      },
    ];

    Movie.create(moviesArray, (err, movies) => {
      if (err) {
        throw err;
      }

      movies.forEach(movie => {
        console.log(`you have added a new Movie: ${movie.title}`);
      });
      mongoose.connection.close();
    });
  });
