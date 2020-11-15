
const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.js')

mongoose.connect('mongodb://localhost/starter-code')

const initialCelebrities = [
    {
        name: 'Maradona',
        occupation: 'unknown',
        catchPhrase: 'golasoooo!'
    },
    {
        name: 'Elon Musk',
        occupation: "Visionary",
        catchPhrase: "It's OK to have your eggs in one basket as long as you control what happens to that basket"
    },
    {
        name: 'Michael Jackson',
        occupation: 'Dancer, Singer',
        catchPhrase: "Lies run sprints, but the truth runs marathons" 
    }]

Celebrity.create(initialCelebrities)
    .then(result=>console.log(`Success seeding "initialCelebrities"`))
    .catch(err=> console.log(`Error while seeding "initialCelebrities"`))