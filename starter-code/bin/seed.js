const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbname ="starter-code"
mongoose.connect(`mongodb://localhost/${dbname}`)

const celebrities = [
  {
    name:"Paula Felipe",
    occupation:"Ironhacker",
    catchPhrase:"Estoy muy contenta"
  },
  {
    name:"María Gabaldon",
    occupation:"Ironhacker",
    catchPhrase:"me gusta el retero"
  },
  {
    name:"Tino Gutierrez",
    occupation:"Ironhacker",
    catchPhrase:"Matemos a los Zombies"
  },
  {
    name:"Alessio Marinoni",
    occupation:"Ironhacker",
    catchPhrase:"Dedicated to Ugin y Bigolo"
  },
  {
    name:"Anthony Garcia",
      occupation:"Ironhacker",
    catchPhrase:"Tengo que trabajar"
  },
  {
    name:"Jorge Luis Hernández Ferná",
    occupation:"Ironhacker",
    catchPhrase:"Yo es que ese detalle no lo entiendo"
  },
  {
    name:"Benjamin Garcia",
    occupation:"Ironhacker",
    catchPhrase:"Oye, tu aluna vez has fumado..."
  },
  {
    name:"Cristina Vegas",
      occupation:"Ironhacker",
    catchPhrase:"Eso esta muy cuki"
  },
  {
    name:"Noah Wang Teng",
    occupation:"Ironhacker",
    catchPhrase:"eso yo lo entiendo porque suena a chino"
  },
  {
    name:"Jorge Rodriguez",
    occupation:"Ironhacker",
    catchPhrase:"quiero tirar la ruleta"
  },
  {
    name:"Teodoro Lopez",
    occupation:"Ironhacker",
    catchPhrase:"Me voy a fumar"
  },
  {
    name:"Juan Antonio Pérez Gago",
    occupation:"Ironhacker",
    catchPhrase:"BlackFriday"
  },
  {
    name: "Sachin Tekchandani",
    occupation: "Ironhacker",
    catchPhrase:"it's something"
  }, 
  {
    name: "Lucia Astray",
    occupation: "Ironhacker",
    catchPhrase:"Megusta bailar"
  },
  {
    name: "Juan Manuel Arnelas",
    occupation: "Ironhacker",
    catchPhrase:"BlackThursday"
  }, 
  {
    name: "Leticia Escanciano",
    occupation: "Ironhacker",
    catchPhrase:"mi archienemigo Teo"
  },
  {
    name:"Ferbo Lizarraga",
    occupation:"Ironhacker",
    catchPhrase:"no se.. algo sera.."
  },
  {
    name: "David Ortiz",
    occupation: "Ironhacker",
    catchPhrase: "Esta chuli"
  }, 
  {
    name: "Gabriel Cebrián Lucas",
    occupation: "Ironhacker",
    catchPhrase:"PEPE te quiero PEPE!"
  },
  {
    name: "Germán Álvarez",
    occupation: "Ironhacker",
    catchPhrase: "en 3... 2...1... algo falla..."
  }
]
Celebrity.create(celebrities)
  .then(celebritiesCreated =>{
    console.log(`Added ${celebritiesCreated.length} Ironhacker` )
    mongoose.connection.close()
  })
  .catch(err=> console.log(`Error en seed: ${err}`))