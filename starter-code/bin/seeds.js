const mongoose = require('mongoose')
const moviesInput = require('../models/movies.js')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  var movies = [
    {
      title: "Amanece que no es poco",
      genre: "Humor",
      plot: "Un pueblo subrealista de España y sus locas aventuras"
    },
    {
      title: "Bajarse al moro",
      genre: "Humor",
      plot: "Una pareja esta metida en el contrabando de hachis y les pasan cosas"
    },
    {
      title: "La lengua de las mariposas",
      genre: "Drama",
      plot: "Pelicula extraña porque apenas hay peliculas sobre la guerra civil española, pero esta esta entretenida"

    }
  ]



moviesInput.insertMany(movies)
.then(()=> console.log("Insertado, Amigo"))




// let celebritys = [
// {
//   name: "Miguel Bose",
//   occupation: "Cantante",
//   catchPhrase: "Sere tu amante bandido"
// },{
//   name: "Carles Puigdemont",
//   occupation: "Profugo",
//   catchPhrase: "Proclamo la republica, pero de bromis"
// },
// {
//   name: "Mariano Rajoy",
//   occupation: "Paseante",
//   catchPhrase: "Cuanto peor mejor para todos el suyo beneficio politico"
// }
// ]



// celebrityInput.insertMany(celebritys)
// .then(()=>{
//   console.log("Registrado")
// })
// .catch((err)=>{
//   console.log(err)
// })