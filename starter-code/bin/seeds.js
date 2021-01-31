require("../app.js")

const mongoose = require('mongoose');

const Celebrity = require("../models/celebrity")

const initialLoad = [
    {
        name: 'Lionel Messi',
        occupation: 'Sports',
        catchPhrase: 'Ola k ase',
    },
    {
        name: 'Jeff Bridges',
        occupation: 'Actor',
        catchPhrase: 'The Dude says',
    },
    {
        name: 'Donald Trump',
        occupation: 'Politian',
        catchPhrase: `Grab'em by the p...`,
    },
]

Celebrity.deleteMany()
.then(() => {
    Celebrity.create(initialLoad)
})
.then(() => {
    for (i=0; i<initialLoad.length; i++) {
        console.log(`Inserted ${initialLoad[i].name}`)
    }
})
.finally(() => {
    setTimeout(function(){ 
        mongoose.connection.close(); 
    }, 1000);
})
.catch(() => console.log('Error creating DB initial load'))