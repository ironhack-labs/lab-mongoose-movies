const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const celebrityInfo = [
    {
        name: "Radku",
        occupation: "Cook",
        catchPhrase: "Give your best"
    },
    {
        name: "Dodo",
        occupation: "Singer",
        catchPhrase: "To infinity and beyond"
    },
    {
        name: "Masha",
        occupation: "Boss",
        catchPhrase: "Just do it"
    }
]

mongoose
.connect('mongodb://localhost/lab-mongoose-movies', {userNewParser: true})
.then(x => {
    console.log(`Connected to DB! Name is: "${x.connections[0].name}"`)
    return Celebrity.insertMany(celebrityInfo)
})
.then(celebrityInfo => {
    console.log(celebrityInfo)
    mongoose.disconnect()
})
.catch(err => {
    console.log('db mongoose connect err', err)
})