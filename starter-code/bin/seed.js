const mongoose = require('mongoose')
const CelebrityModel = require('../models/celebrity')

mongoose.connect('mongodb://localhost/celebrity')

const myCelebrities = [
    {
        name: 'Bruce Willis',
        occupation: 'actor',
        catchPhrase: 'yipi ka yey madafaka'
    },
    {
        name: 'James Hetfield',
        occupation: 'singer',
        catchPhrase: 'yeeeeeeeeah'
    },
    {
        name: 'Richard Z. Kruspe',
        occupation: 'Guitar',
        catchPhrase: 'Du hast mich'
    },
]

CelebrityModel
    .create(myCelebrities)
    .then(data => {
        console.log(data)
        mongoose.connection.close(() => console.log('Connection Closed'))
    })
    .catch(err => console.log(err))
