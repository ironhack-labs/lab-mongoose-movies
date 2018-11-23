const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbname = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbname}`)

const celebrities= [
  {name:"Tom Cruise",
  occupation:"actor",
  catchPhrase:"Ve mis peliculas"
  },
  {name:"Omar Fierro",
  occupation:"conductor, chef y actor",
  catchPhrase:"toda mi vida he sido un tragon"
},
  {name:"Salma Hayek",
  occupation:"actriz",
  catchPhrase:"Vamos a actuar"

  }
]
Celebrity.create(celebrities)
.then(celebrity=>{
  console.log(`Se han creado ${celebrity.length}`)
  mongoose.connection.close()
}).catch(err=>{
  console.log(err)
})