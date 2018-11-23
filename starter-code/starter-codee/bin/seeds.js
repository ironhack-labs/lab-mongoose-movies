const mongoose = require('mongoose')
const Movie = require('../models/Movie')

const dbname = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbname}`)

const movies= [
  {title:"Guerra de los mundos",
  genre:"ciencia y ficcion",
  plot:"Pelicula muy buena de invasion de aliens"
  },
  {title:"Inception",
  genre:"Ciencia ficcion",
  plot:"pelicula muy confusa, con final raro"
},
  {title:"Hobbit",
  genre:"fantasia",
  plot:"Historia de un hobbit y sus aventuras"

  }
]
Movie.create(movies)
.then(movie=>{
  console.log(`Se han creado ${movie.length}`)
  mongoose.connection.close()
}).catch(err=>{
  console.log(err)
})