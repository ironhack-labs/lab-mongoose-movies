const celebrities = [
    {
        name: 'DJ Khaled',
        occupation: 'DJ',
        catchPhrase: 'DJ Khaled!'
    },
    {
        name: 'Fetty Wap',
        occupation: 'Singer',
        catchPhrase: '1738'
    },
    {
        name: 'Craque Neto',
        occupation: 'Presenter',
        catchPhrase: 'Digassi di passagi'
    }
]

const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity.js');

require('../app.js')

Celebrity.insertMany(celebrities)
.then(celebrityCreated => {
    console.log(celebrityCreated)
})
.catch(error => {
    console.log(error)
})
