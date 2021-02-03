require('dotenv').config()
require('../config/db.config')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

const dataCelebs = [
    { name: 'Rafa Nadal', occupation: 'Tennis player', catchPhrase: 'Vamos'},
    { name: 'Anthony Hopkings', occupation: 'Actor', catchPhrase: 'I killed all the lambs'},
    { name: 'Karlos Arguiñano', occupation: 'Chef', catchPhrase: 'Un poquito de sal y listo'},
    { name: 'Vivan Leigth', occupation: 'Actress', catchPhrase: 'I\'ll never be hungry again'},
    { name: 'The old guts and blod', occupation: 'Five star US Army', catchPhrase: 'Beat the nazis'}
]

const dataMovies = [
    {
        title: 'Gone with the wind',
        plot:'Girl is in love during the american independance war in 1967',
        //stars: '60197bbc786c6f4ffa04fe66', /* esto no vale -> _id */
    },
    {
        title: 'The longest day',
        plot:'Accurate film about Normandy\'s landing during the IIWW',
        //stars: '60197bbc786c6f4ffa04fe67'
    }
]

// Pruebas
Promise.all([Celebrity.deleteMany(), Movie.deleteMany()])
    .then(() => {
        dataCelebs.forEach(celeb => {
            Celebrity
                .create(celeb)
                .then((celeb) => {
                    Movie
                        .create({
                            title: 'Gone with the wind',
                            plot:'Girl is in love during the american independance war in 1967',
                            stars: celeb._id
                        },{
                            title: 'The longest day',
                            plot:'Accurate film about Normandy\'s landing during the IIWW',
                            stars: celeb._id
                        })
                })
        })
    })
    .catch(e => console.log(e))