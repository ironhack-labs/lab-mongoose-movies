// es un archivo semilla para alimentar la base de datos. 
const mongoose = require('mongoose');
// requerimos el archivo celebrity que esta en nuestra carpeta models.
const CelebrityModel = require('../models/celebrity');

// nos conectamos a la base de datos. 
mongoose.connect('mongodb://localhost/celebrity')

const myCelebrities = [
    {
        name: 'Courtney love', 
        occupation: 'singer',
        catchPhrase: 'You dont even do rock stars anymore!'
    }, 
    {
        name: 'Kanye West', 
        occupation: 'singer',
        catchPhrase: 'Imma let you finish, but Beyoncé had one of the best videos of all time!'
    },
    {
        name: 'Paris Hilton', 
        occupation: 'Artist',
        catchPhrase: 'Thats hot'
    }
]

CelebrityModel
    .create(myCelebrities)
    .then(data => {
        console.log(data)
        mongoose.connection.close(() => console.log('Connection Closed'))
    })
    .catch(err => console.log(err))