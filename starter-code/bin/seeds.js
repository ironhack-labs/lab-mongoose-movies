// require database configuration
require('../configs/db.config');

const Movie = require('../models/Movie.model')

const movies = [
    {
        id: 'reservoirdogs',
        title: 'Reservoir Dogs',
        genre: 'Crime',
        plot: 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        description: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.'
    },
    {
        id: 'pulpfiction',
        title: 'Pulp Fiction',
        genre: 'Crime',
        plot: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
        id: 'thehatefuleight',
        title: 'The Hateful Eight',
        genre: 'Western',
        plot: 'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        description: 'In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.'
    },
];

Movie.deleteMany({})
    .then(() => Movie.insertMany(movies))
    .then((movieFromDb) => {
        console.log('Insert to BBDD', movieFromDb)
    })
    .catch(error => console.log('An error happened while find title:', error));


