require('dotenv').config()
require('../config/db.config')
const Celebrity = require('../models/Celebrity.model')

const dataCelebs = [
    { name: 'Rafa Nadal', occupation: 'Tennis player', catchPhrase: 'Vamos'},
    { name: 'Anthony Hopkings', occupation: 'Actor', catchPhrase: 'I killed all the lambs'},
    { name: 'Karlos Arguiñano', occupation: 'Chef', catchPhrase: 'Un poquito de sal y listo'}
]

Celebrity
    .deleteMany()
    .then(() => {
        Celebrity
            .create(dataCelebs)
            .then(celebs => console.log(celebs))
    })
    .catch(e => console.log(e))