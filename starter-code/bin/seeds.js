const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

mongoose.connect('mongodb://localhost/starter-code' , {
  useNewUrlParser : true
})

const celebrities = [
  {
    name: 'Mike Gold',
    occupation: 'Bank Robber',
    catchPhrase: 'Gimme the gold mate or seal your fate, '},
  {
    name: 'Joe Speeds',
    occupation: 'Stunt driver',
    catchPhrase: "Hasta la vista baby"},
  {
    name: 'Mandy Snow',
    occupation: 'Actress',
    catchPhrase: "Let it snow"}
]   