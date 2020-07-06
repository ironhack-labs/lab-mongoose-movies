// require database configuration
require('../configs/db.config');

const Celebrity = require('../models/Celebrity.model')

const celebrities = [
    {
        name: 'Keanu Reeves',
        occupation: 'Actor',
        catchPhrase: 'El dinero no significa nada para mí. He ganado mucho dinero, pero quiero disfutar la vida y no estresarme aumentando una cuenta bancaria'
    },
    {
        name: 'Robert Downey Jr.',
        occupation: 'Actor',
        catchPhrase: 'Ya no bebo. ...'
    },
    {
        name: 'Robert Redford',
        occupation: 'Actor',
        catchPhrase: 'Para construir un mundo mejor, en ocasiones hay que destruir el antiguo, y eso crea enemigos.'
    }
];

Celebrity.deleteMany({})
    .then(() => Celebrity.insertMany(celebrities))
    .then((celebrityFromDb) => {
        console.log('Insert to BBDD', celebrityFromDb)
    })
    .catch(error => console.log('An error happened while find title:', error));


