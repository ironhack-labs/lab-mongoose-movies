const mongoose = require('mongoose')
const celebrity = require('../models/celebrity')

// Create an array of 3 objects

const celebrities = [
    {
        name: 'Gautama Buddha',
        occupation: 'Philosopher',
        catchPhrase: 'Peace comes from within. Do not seek it without.'
    },
    {
        name: 'Oprah',
        occupation: 'Philanthropist',
        catchPhrase:'Turn your wounds into wisdom'
    },
    {
        name: 'Eddie Vedder',
        occupation: 'Artist',
        catchPhrase: 'I knew all the rules but the rules did not know me.'
    }
]
// Call the Celebrity model's create method with the array as argument.

celebrity.create(celebrities)

// In the create method's callback, display feedback. - HELP: Iteraion 1: 4 onwards