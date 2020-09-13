const mongoose = require("mongoose");
const dbName='moviesDB'

const Movie = require("../models/movies.model");

mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const movies=[
  {
    title:"Los gremlins",
    genre:"terror",
    plot:"unos bichos muy chungos que ,si los mojas o les das de merendar tarde, se vuelven muy locos",
  },
  {
    title:"Condemor",
    genre:"Comedia, Western",
    plot:"Chiquito de la calzada es un vaquero. Qué más se puede decir de este peliculón",
  },
  {
    title:"El robobo de la Jojoya",
    genre:"humor",
    plot:"Martes y trece investigan el robo de una joya, una película a la altura de star Wars",
  },
]

Movie.create(movies)
.then(allMoviesCreated => console.log("Hemos creado ",allMoviesCreated.length, " películas en la base de datos"))
.catch(err=> console.log('Error: ',err))


// const Celebrity = require("../models/celebrity.model");
// const dbName = 'celebritiesDB';

// const celebrities = [
//   {
//     name: "Chiquito de la Calzada",
//     ocupation: "Humorista",
//     catchPhrase: "No te digo trigo te digo Rodrigo, hasta luego Lucas",
//   },
//   {
//     name: "Belén Esteban",
//     ocupation: "Princesa del pueblo",
//     catchPhrase: "Por mi hija MA TO",
//   },
//   {
//     name: "Germantastico",
//     ocupation: "Master Developer",
//     catchPhrase: "So!",
//   }
  
// ];


// Celebrity.create(celebrities)
// .then(allCelebritiesCreated => console.log("Hemos creado ",allCelebritiesCreated.length, " celebrities en la base de datos"))
// .catch(err=> console.log('Error: ',err))
