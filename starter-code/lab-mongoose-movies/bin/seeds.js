const mongoose=require('mongoose');
const Celebrity=require('../models/celebrity');

const dbName="celebrity-movies-project"
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities=[
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "working hard"
  },
  {
    name: "Barack Obama",
    occupation: "president of the USA",
    catchPhrase: "Be smart"
  },
  {
    name: "Jude Law",
    occupation: "actor",
    catchPhrase: "playboy"
  }
]

Celebrity.create(celebrities,(err)=> {
  if(err){throw(err)}
  console.log(`created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})