const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'celebrities'

mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
  {
    name : "Brendan Fraser",
    occupation: "Actor",
    cacatchPhrase: "oh my god"
  },
  {
    name : "Rene Stiller",
    occupation: "Astromático",
    cacatchPhrase: "a huevo"
  },
  {
    name : "BlisS",
    occupation: "Dev",
    cacatchPhrase: "polloyón"
  }
];

Celebrity.create(celebrities)
    .then(celebrities=>{
      console.log(`${celebrities.length} celebrities created`)
      mongoose.connection.close()
    })
    .catch(err=>console.log('Something went wrong', err))