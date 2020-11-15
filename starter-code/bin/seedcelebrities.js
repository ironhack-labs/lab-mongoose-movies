// CELEBRITIES

const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

mongoose.connect(`mongodb://localhost/starter-code`)

const celebrity = [
    {
        name: 'Jason Statham',
        occupation: 'Actor',
        catchPhrase: 'Idiots need friends too'
    },
    {
        name: 'Guy Ritchie',
        occupation: 'Actor',
        catchPhrase: 'Rockers like him never die, they just waste away and fuck me'
    },
    {
        name: 'Vinnie Jones',
        occupation: 'Actor',
        catchPhrase: 'Liverpools anthem is \'You will never walk alone\'. But Wimbledon is \'You will never walk again\''
    }
]

Celebrity.create(celebrity, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrity.length} celebrities`)
    mongoose.connection.close()
})
