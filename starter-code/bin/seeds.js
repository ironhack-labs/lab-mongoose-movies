const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Film = require('../models/movie.model');
const Movie = require('../models/movie.model');

mongoose.connect(`mongodb://localhost/stars-films`);

//PARA BORRAR ANTES DE VOLVER A EJECUTAR

//Celebrity.collection.drop();
Film.collection.drop();


/*const celebrity = [
    {
        name: "Chiquito de la Zalcada",
        occupation: "Humorista",
        catchPhrase: "Jandemor"
    },
    {
        name: "Danny BeNito",
        occupation: "Actor",
        catchPhrase: "Soy un pingüino. O algo así era."
    },
    {
        name: "Calderón de la Mierda",
        occupation: "Escritor",
        catchPhrase: "La vida es una barca"
    },
]*/


const movie = [
    {
        title: "Un charquito en medio del mar",
        genre: "Drama",
        plot: "plotplotplot"
    },
    {
        title: "Un charquito en medio del mar II",
        genre: "Comedia",
        plot: "plotplotplot"
    },
    {
        title: "Un charquito en medio del mar III: Revenge.",
        genre: "Acción",
        plot: "plotplotplot"
    }

]

//SEED!

//SEED CELEBRITY
// Celebrity.create(celebrity)
//     .then(famousePeople => {
//         console.log(`Se han creado ${famousePeople.length} famosos`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('Error creando famosos, call Salvame!', err))

//SEED MOVIE

Movie.create(movie)
    .then(movies => {
        console.log(`Se han creado ${movies.length} pelis.`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error al crear pelis', err))