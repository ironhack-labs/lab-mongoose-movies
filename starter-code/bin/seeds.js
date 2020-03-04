const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
require('dotenv').config();

const dbPath = 'mongodb://localhost:27017/movies';

const celebrities =[  
  {
    name: 'Paquito',
    occupation: 'Chocolatero',
    catchPhrase: 'what?',
  },
  {
    name: 'Manolito',
    occupation: 'Gafotas',
    catchPhrase: 'Si,no?',
  },
  {
    name: 'Malaquito',
    occupation: 'De Memphis',
    catchPhrase: 'abril?',
  }]

mongoose
.connect(dbPath, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(`conected to ${dbPath}`);
})
.then(()=>{
  Celebrity.collection.drop()
})
.then(()=>{
  Celebrity.insertMany(celebrities)
})
.catch(error => {
  console.error(error);
});