// require database configuration
require('../configs/db.config');

const Celebrity = require('../models/Celebrity.model')

const celebrities = [
    {
        name: 'Keanu Reeves',
        occupation: 'Actor',
        catchPhrase: 'El dinero no significa nada para mí. He ganado mucho dinero, pero quiero disfutar la vida y no estresarme aumentando una cuenta bancaria',
        image: 'https://m.media-amazon.com/images/M/MV5BNjUxNDcwMTg4Ml5BMl5BanBnXkFtZTcwMjU4NDYyOA@@._V1_SY1000_CR0,0,771,1000_AL_.jpg'
    },
    {
        name: 'Robert Downey Jr.',
        occupation: 'Actor',
        catchPhrase: 'Ya no bebo. ...',
        image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_SY1000_CR0,0,664,1000_AL_.jpg'
    },
    {
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


