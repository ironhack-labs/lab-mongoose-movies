const mongoose = require('mongoose')
const Celebrity = require('../Models/Celebrity')

const celebArr = [{
  name: "Leonardo Di Caprio",
  occupation: "actor",
  catchPhrase: "Earth is dying"
},
{
  name: "Beyonce",
  occupation: "singer",
  catchPhrase: "crazy in love"
},
{
  name: "Diego Vazquez",
  occupation: "Teacher hacker",
  catchPhrase: "mind blow"
}]

mongoose.connect('mongodb://localhost/starter-code')
const createCeleb = Celebrity.create(celebArr)

createCeleb
.then(result => {
  console.log('celebs', result)
  mongoose.connection.close()
})
.catch(err => {
  console.log(err)
})