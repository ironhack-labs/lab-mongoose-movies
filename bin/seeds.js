const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/lab-celebrity', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

var celebrityData = [{
    name: 'Judd Apatow',
    occupation: 'Director',
    catchPhrase: 'Apatow Kapow!'
}, {
    name: 'Martin Scorcese',
    occupation: 'Weirdo',
    catchPhrase: 'Scorcese aint da way-zee'
}, {
    name: 'Wes Anderson',
    occupation: 'Lines up lines',
    catchPhrase: "Let's make this shot perfectly parallel"
}]


Celebrity.deleteMany({}, () => null)
celebrityData.map(data => Celebrity.create(data))