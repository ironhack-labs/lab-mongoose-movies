const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dataActors = [
    {
      name: "Will Smith",
      occupation: "Actor",
      catchPrase: 'lolololol'
    },
    {
      name: "Robert Downey Jr.",
      occupation: "Actor",
      catchPrase: 'I am IronMan'
    },
    {
      name: "Zac Efron",
      occupation: "Actor",
      catchPrase: 'lksdflasdjcln'
    }
  ]

  mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(dataActors).then(res => console.log('DataActors in DB'))
  })
  .catch(err => {
    console.error('Error populating Mongo:', err)
  }); 