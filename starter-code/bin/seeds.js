const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const celebrities = [
  {
    name: 'Lebron James',
    occupation: 'NBA player',
    catchPhrase: 'HairLine'
  },
  {
    name: 'Kobe Bryant',
    occupation: 'GOAT',
    catchPhrase: 'Ball is life'
  },
  {
    name: 'MJ',
    occupation: 'GOD',
    catchPhrase: 'Shoes are life'
  }
]







mongoose
.connect('mongodb://localhost/labgoose', {useNewUrlParser: true})
.then(x=> {
  console.log(`Connected to Mongo! Database name:"${x.connections[0].name}`)
})
Celebrity.insertMany(celebrities).then(celeb => {
console.log(celeb)
}).catch(err=> console.error(err)) 