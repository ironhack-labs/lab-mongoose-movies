const mongoose = require('mongoose')

const Movie = require('../models/Movie')
const Celebrity = require('../models/Celebrity')

const celebrities =[
  {
    name:'Yalitza Aparicio',
    ocupation: 'Ex teacher',
    catchPhrase:'Todos podemos reescribir las reglas'
  },
  {
    name:'Keanu Reeves',
    ocupation: 'Actor',
    catchPhrase: 'De Matrix a Jhon Wick'
  },
  {
    name: 'Tom Holland',
    ocupation: 'Actor',
    catchPhrase:'No me quiero ir señor Stark'
  }
]

const movies=[
  {
    title:'El señor de los anillos',
    genre:'fantasia',
    plot: 'multi-plot'
  }
]
//coneccion a DB
mongoose.connect('mongodb://localhost/movies-celebrities')

const createMovies = Movie.create(movies) 
const createCelebrities = Celebrity.create(celebrities) 

Promise.all([createMovies,createCelebrities])
  .then(results=>{
    console.log(results+'DB created');
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log(err);
    mongoose.connection.close()
  })

