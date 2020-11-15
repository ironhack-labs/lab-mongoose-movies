// const celebrities = [
//     {
//         name: "Jaime",
//         occupation: "web developer",
//         catchPhrase: "Esto no nos interesa",
//     },
//     {
//         name: "Javi",
//         occupation: "web developer",
//         catchPhrase: "Si tienes tiempo, mejora el CSS",
//     },
//     {
//         name: "Mark",
//         occupation: "Web programming student",
//         catchPhrase: "Pull request hecha 10.00h",
//     }
// ]


// const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity')

// const dbName = 'starter-code'
// mongoose.connect(`mongodb://localhost/${dbName}`)


//   Celebrity.create(celebrities)
//   .then(()=>{
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close()
//   })
//   .catch((err)=>{
//       console.log(err)
//       res.send(err)
//   })

  const movies = [
    {
        title: "Como perder la cabeza en 10 dias",
        genre: "Drama",
        plot: "Ironhack course",
    },
    {
        title: "Ironstellar",
        genre: "Sci-fi",
        plot: "El tiempo es relativo",
    },
    {
        title: "Cincuenta sombras de CSS",
        genre: "Comedy",
        plot: "CSS disinhibited",
    }
]

const mongoose = require('mongoose')
const Movie = require('../models/movie')

const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`)


  Movie.create(movies)
  .then(()=>{
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  })
  .catch((err)=>{
      console.log(err)
      res.send(err)
  })