const mongoose = require('mongoose')
require("../app.js")
const Celebrity = require("../models/Celebrity.model")

const celebritys = [
    { name: 'Steve Jobs', occupation: 'Empresario', catchPhrase: 'Tu trabajo va a llenar gran parte de tu vida, la única manera de estar realmente satisfecho es hacer lo que creas que es un gran trabajo y la única manera de hacerlo es amar lo que haces. Si no lo has encontrado aún, sigue buscando. Como con todo lo que tiene que ver con el corazón, lo sabrás cuando lo hayas encontrado.'},
    { name: 'Zac Efron', occupation: 'Actor', catchPhrase: 'Los grandes consejos vienne de personas que han estado mucho más tiempo que tú.'},
    { name: 'Bruno Mars', occupation: 'Cantante', catchPhrase: 'Para escribir una canción debes tener imaginación, para tener imaginación debes ser libre.'},
]

Celebrity.deleteMany({})
.then(() => Celebrity.create(celebritys))
.then((celebrity) => console.log("Added Celebritys Successfully.", celebrity))
.catch((error) => console.log(error))