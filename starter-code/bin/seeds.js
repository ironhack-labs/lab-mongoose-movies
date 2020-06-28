//DDBB
const mongoose = require('mongoose')
const db = 'celebrities'
mongoose.connect(`mongo://localhost/${process.env.db}`)


// Model Celebrity
const Celebrity = require("../models/celebrity.model")

//Data
const celebrities = [{
    name:"stephen king",
    occupation: "Writer",
    catchPhrase:"Learning is discovering what we already know"
},
{
    name:"stephen hopkins",
    occupation:"theoretical physicist",
    catchPhrase: "Every time I hear about that cat, I start to pull out my gun (gato de Schrödinger)"
},
{
    name:"freddy mercury",
    occupation:"singer",
    catchPhrase:"I am simply a musical prostitute, dear."
}

]

Celebrity
   .create(celebrities)
   .then(celebritiesArr => {
       console.log(`Añadido a la ${process.env.db} ${celebritiesArr.length}`)
       mongoose.connection.close()
   })
   .catch(err => console.log('Error: ', err))
       
       

Movies

const movie = require("../models/Movie.model")
movie.collection.drop()

const movies = [{
     title:"Yo antes de ti",
     genero:"suspense, romantico",
     plot:"Una chica empezando un master"

},
{
    title:"yo despues de ti",
    genero:"superacíon",
    plot:"Con mucha ilusón por conseguir sus metas"

  },
  {  title:"Ironhack",
     genero:"comedia, suspense y drama",
     plot:" Melissa se siente muy emocionada por estar en Iron pero ahora se siente perdida con este temario :(. Necesita ayuda!!"

  },

]

Movie 
    .create(movies)
    .then(moviesArr => {
        console.log(`Anadido a ${process.env.db} ${moviesArr.length}`)
    })
    .catch(err => console.log('Error: ', err))