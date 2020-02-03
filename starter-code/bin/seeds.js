const mongoose     = require('mongoose');
const Celeb = require('../models/Celebrities')
//const Movie=require('../models/Movie')
exports.celebsSpecs = [
  {
    name: "Tera",
    occupation: "unknown",
    catchphrase: "Miau"
  },
  {
    name: "Pippa",
    occupation: "unknown",
    catchphrase: "Guau"
  },
  {
    name: "Ojitos",
    occupation: "unknown",
    catchphrase: "*loud scream*"
  }
]

mongoose
.connect('mongodb://localhost/movieMongoose',{useCreateIndex:true,useUnifiedTopology:true})
.then( async x =>{
    console.log('Connected to Mongo!')
    await Celeb.create(celebsSpecs)
                .then(success=>console.log('Celebrities imported to DB'))
                .catch(err=>console.log('Error importing data'))
    /*await Movie.create(movieData)
                .then(success=>console.log('Movies imported to DB'))
                .catch(err=>console.log('Error importing data'))*/
    await mongoose.connection.close()
    console.log('Connection closed')
})
.catch(err=> console.log('Error conecting to  Mongo'))
