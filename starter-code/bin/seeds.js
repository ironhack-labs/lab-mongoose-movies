const mongoose = require('mongoose');

//const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

mongoose.connect(`mongodb://localhost/starter-code`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// const arrCelebrity=[
//     {
//         name:'Charles Chaplin',
//         occupation:'Actor',
//         catchPhrase:'Aprende como si fueras a vivir toda la vida y vive como si fueras a morir mañana '
//     },
//     {
//         name:'Walt Disney',
//         occupation:'Guionista',
//         catchPhrase:'Piensa, Sueña, Cree y Atrévete'
//     },
//     {
//         name:'Marilyn Monroe',
//         occupation:'Actriz',
//         catchPhrase:'Si dejas salir tus miedos, tendrás más espacio para vivir tus sueños'
//     }
// ]

// Celebrity.create(arrCelebrity)
// .then(celebrities=>console.log("Celebries created", celebrities))
// .catch(err=>console.log("Impossible to create celebrities"))

const arrMovie = [
    {
        title: "Tiempos modernos",
        genre: "Comedia",
        plot: " Esta película es un reflejo de las condiciones desesperadas de las cuales era víctima un empleado de la clase obrera en la época de la Gran depresión, en la visión dada por la película, por la eficiencia de la industrialización y la producción en cadena."
    },
    {
        title: "Luces de la cuidad",
        genre: "Comedia",
        plot: "Charlot, el personaje interpretado por Chaplin, es un pobre vagabundo sin hogar que conoce a una florista ciega (Virginia Cherrill) y se enamora de ella."
    },
    {
        title: "The Seven Year Itch ",
        genre: "Comedia Romántica",
        plot: "ichard Sherman (Tom Ewell) es un ejecutivo de mediana edad que trabaja en una editorial modesta, un hombre simplón y confiado con una imaginación hiperactiva que se encuentra en medio de una crisis de madurez. Su esposa Helen (Evelyn Keyes), y su hijo, Ricky (Butch Bernard), pasan el verano en Maine, a la orilla del mar. "
    }
]

Movie.create(arrMovie)
    .then(moviea => console.log("Movies creates"))
    .catch(err => console.log(err))