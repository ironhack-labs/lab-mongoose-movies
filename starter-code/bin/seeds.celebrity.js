const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')



const celebrities = [
    {
        name: 'heath ledger',
        occupation: 'actor',
        catchPhrase: 'Why so serious? >:)'
    }]




    

mongoose
    .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        return Celebrity.insertMany(celebrities)
    })
    .then(celebrities => {
        console.log(celebrities)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

