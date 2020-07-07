// require database configuration
require('../configs/db.config');

const Celebrity = require('../models/Celebrity.model')

const celebrities = [
    {
        id: 'keanureeves',
        name: 'Keanu Reeves',
        occupation: 'Actor',
        catchPhrase: 'El dinero no significa nada para mí. He ganado mucho dinero, pero quiero disfutar la vida y no estresarme aumentando una cuenta bancaria',
        image: 'https://m.media-amazon.com/images/M/MV5BNjUxNDcwMTg4Ml5BMl5BanBnXkFtZTcwMjU4NDYyOA@@._V1_SY1000_CR0,0,771,1000_AL_.jpg'
    },
    {
        id: 'robertdowneyjr',
        name: 'Robert Downey Jr.',
        occupation: 'Actor',
        catchPhrase: 'Ya no bebo. ...',
        image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_SY1000_CR0,0,664,1000_AL_.jpg'
    },
    {
        id: 'robertredford',
        name: 'Robert Redford',
        occupation: 'Actor',
        catchPhrase: 'Para construir un mundo mejor, en ocasiones hay que destruir el antiguo, y eso crea enemigos.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk1Nzc5MzQyMV5BMl5BanBnXkFtZTcwNjQ5OTA0Mg@@._V1_.jpg'
    }
];

Celebrity.deleteMany({})
    .then(() => Celebrity.insertMany(celebrities))
    .then((celebrityFromDb) => {
        console.log('Insert to BBDD', celebrityFromDb)
    })
    .catch(error => console.log('An error happened while find title:', error));




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


