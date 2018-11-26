const mongoose = require('mongoose')
const Movie = require('../models/Pelis')

 const dbname = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbname}`)
 const movies= [
  {title:"Harry Potter",
  genre:"ciencia y ficcion",
  plot:"Fantasia"
  },
  {title:"Scary Movie",
  genre:"Comedia",
  plot:"Pelicula que toma partes de otras peliculas y las vuelve humor"
},
  {title:"Titanic",
  genre:"Drama",
  plot:"Rosse No deja subir a jack a su pedazo de madera :v"
   }
]
Movie.create(movies)

.then(movie=>{
  console.log(`Se han creado ${movie.length} movies`)
  mongoose.connection.close()
}).catch(err=>{
  console.log(err)
}) 