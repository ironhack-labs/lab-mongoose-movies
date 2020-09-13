const mongoose = require('mongoose');
const Celebritie = require('../models/celebrity');
const Movie = require('../models/movie')

const dbName = 'celebs-movies';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })


const celebrities= [{
    name : "Isabel Pantoja",
    occupation: "Cantante",
    catchPhrase: "Si me queréis irsus"
},
{
    name : "Belén Esteban",
    occupation: "colaboradora de TV / ¿escritora?",
    catchPhrase: "Andreita cómete el pollo"
},
{
    name : "Gran Wyoming",
    occupation: "Presentador de TV",
    catchPhrase: "Ya conocen las noticias, ahora les contaremos la verdad"
}
]

const movies= [{
    title : "Los Goonies",
    genre: "infantil",
    plot: "unos niños van en busqueda de un tesoro pirata pero unos ladrones les persiguen para quedárselo"
},
{
    title : "Terminator",
    genre: "acción",
    plot: "Un robot viene del futuro para matar al niño que salvará a los humanos"
},
{
    title : "Harry Potter",
    genre: "fantasía",
    plot: "un niño huerfano se va a un colegio lleno de bichos raros y salva a todos con su magia y su escoba"
}
]

Celebritie.create(celebrities)
.then(newCelebrities => console.log('se han creado', newCelebrities.length, 'nuevos en la bbdd'))
.catch(err => console.log('ERROR: ', err))



Movie.create(movies)
.then(newMovies => console.log('se han creado', newMovies.length, 'nuevos en la bbdd'))
.catch(err => console.log('ERROR: ', err))