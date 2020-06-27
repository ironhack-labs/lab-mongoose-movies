const mongoose = require("mongoose");
const dbName = 'group-celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)

const Celebrity = require('../models/celebrity')

const celebrities =[
    
{name:'Chiquito',occupation:'actor',catchPhrase:'Uno que va...'},
{name:'J.J.Vaquero',occupation:'comedian',catchPhrase:'Mi primo el Erizo'},
{name:'Ignatius',occupation:'comedian',catchPhrase:'Un padre separado,tinerfeño,míope'}
]

Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`Created ${allCelebrities.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the celebrities', err))