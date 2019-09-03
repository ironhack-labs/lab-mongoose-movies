const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.js')

const dbtitle = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true })

const celebrities = [
  {name: 'Rihanna', occupation: 'singer', catchPhrase: 'work work work work work'},
  {name: 'Lizzo', occupation: 'singer', catchPhrase: 'fresh photos with the bomb lighting'},
  {name: 'Elsa', occupation: 'cartoon', catchPhrase: 'let it go'},
]

const createCelebrities = celebrities.map(celebrity => {
  const newCelebrity = new Celebrity(celebrity)
  return newCelebrity.save()
  .then((celeb) => console.log(celeb))
  .catch(err => console.log(err))
})