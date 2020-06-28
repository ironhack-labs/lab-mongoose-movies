
//Database
const mongoose = require('mongoose')
const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`)


// Model

// const Celebrity = require('../models/celebrity')

const Movie = require('../models/movie')


//Celebrity Data

// const celebritys = [
//     {
//         name: 'Maria Luisa de Las Nieves Gutierrez',
//         occupation: 'Pinista',
//         catchPhrase: 'Maldita lisiada'
//     },
//     {
//         name: 'Ricky Maravilla',
//         occupation: 'Cantante',
//         catchPhrase: '¿Qué tendrá el petiso?'
//     },
//     {
//         name: 'Ricardo Fort',
//         occupation: 'Bailarin',
//         catchPhrase: 'Miameeeee'
//     }
// ]

 //Movie Data

 const movies = [
     {
         title: 'Lo que el viento nos dejó',
         genre: 'Comedia Romántica',
         plot: 'Dos soldados Iranies van en busca de su perro perdido'
     },
     {
         title: 'Enrique me engañó',
         genre: 'Drama',
         plot: 'Un TA les dice a los alumnos que el ejercicio se hace rápido'
     },
     {
         title: 'Dos empanadas para 3 personas',
         genre: 'Drama',
         plot: 'Una familia Argentina hace lo que puede para sobrevivir durante la crisis de post-Macrismo'
     }
 ]

//Seed the data

// Celebrity.create(celebritys)
//     .then(theCelebrities => {
//         console.log(`Created ${theCelebrities.length} Celebrities`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('There was an error creating the celebrities', err))

Movie.create(movies)
    .then(theMovies => {
        console.log(`Created ${theMovies.length} Movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the movies', err))



