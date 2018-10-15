const mongoose = require('mongoose');
const Celebrity= require('../models/Celebrity.js')

mongoose.connect('mongodb://localhost/Celebrities',{
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
});

const feed= [
  {
    name: "Paquito",
    occupation: 'Master del universo',
    catchPhrase: 'Ola k Ase!'
  },
  {
    name: "Roberto",
    occupation: 'Minecraft Killer',
    catchPhrase: 'Un cubito!!'
  },
  {
    name: "Ernesto",
    occupation: 'Playboy',
    catchPhrase: 'El del seto'
  }
]

Celebrity.insertMany(feed)
.then((result) =>{
  console.log(result);
  mongoose.connection.close();
})
.catch((error) =>{
  console.log(error);
})

