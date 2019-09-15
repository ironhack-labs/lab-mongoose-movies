const mongoose = require('mongoose');
const Celebs = require("../models/celebrity");


mongoose
  .connect('mongodb://localhost/celebs', { useNewUrlParser: true })
  .then(x => {
    
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    start()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

   






function start(){
  Celebs.deleteMany().then(x=>{
    console.log("eliminado")
    Celebs.create(
    [
      {
        name: 'Hola',
        occupation: 'Adios',
        catchPhrase: 'hasta luego'
      },
      {
        name: 'yo',
        occupation: 'ninguna',
        catchPhrase: 'XD'
      },
      {
        name: 'Puede',
        occupation: 'Quizas',
        catchPhrase: 'Tal vez'
      },
    ]
  ).then(createdCelebs=>{
    console.log("created")
  })
})




}