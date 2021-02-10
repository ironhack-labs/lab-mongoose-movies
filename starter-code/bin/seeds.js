const mongoose = require('mongoose')
const Movie = require('../models/Movie.model.js')

const DB_NAME = 'starter-code'


mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const movies = [{
        title: 'El mago de Oz',
        genre: 'Fantasy',
        plot: 'Vincent y Jules trabajan para Marsellus Wallace, un gánster que controla los negocios oscuros de la ciudad, entre ellos, las apuestas. Los dos matones tienen diferentes misiones que cumplir para Marsellus. La principal de ellas es recuperar un maletín misterioso.'
    },
    {
        title: 'Volver al futuro',
        genre: 'Ciencia ficción',
        plot: 'Una máquina del tiempo transporta a un adolescente a los años 50, cuando sus padres todavía estudiaban en la secundaria.'
    },
    {
        title: 'El resplandor',
        genre: 'Terror Psicológico',
        plot: 'Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.'
    }

]


Movie.create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`);

        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));







// const mongoose = require('mongoose')

// const Celebrity = require('../models/Celebrity.model')

// const DB_NAME = 'starter-code'

// mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


// const celebrities = [{
//         name: 'Angelina Jolie',
//         occupation: 'Actress',
//         catchPhrase: 'Antes muerta que sencilla'
//     },

//     {
//         name: 'Bratt Pitt',
//         occupation: 'Actor',
//         catchPhrase: 'Vive intensamente',
//     },

//     {
//         name: 'Kim Kardashian',
//         occupation: 'Influencer',
//         catchPhrase: 'Se me cayó la uña',
//     }
// ]

// Celebrity.create(celebrities)
//     .then(celebritiesFromDB => {
//         console.log(`Created ${celebritiesFromDB.length} celebrities`)

//         mongoose.connection.close()
//     }).catch(error => console.log(`an error ocurred ${error}`))