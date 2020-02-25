const mongoose     = require('mongoose');
const Celeb = require('../models/Celebrities')
const Movie=require('../models/Movies')


 const celebsSpecs = [
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


const movieSeeds = [
  {
    title: "Blade Runner", 
    genre: "Sci-fi",
    plot: "Rain, robots and a unicorn."
  },  
  {
    title: "My Neighbor Totoro", 
    genre: "Cartoon",
    plot: "Kids meet a bear, happen to not die."
  }, 
  {
    title: "Marine", 
    genre: "Action",
    plot: "John Cena thinks he is Rambo."
  }, 
  

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
.catch(err=> console.log('Error conecting to  Mongo: ' + err))

module.exports= {
  celebsSpecs, movieSeeds
}
