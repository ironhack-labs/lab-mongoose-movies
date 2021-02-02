
require('../app')
const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity')



const celebrities = [
    
    {name:'Joaquin Reyes', occupation:'comedian',catchPhrase:'¿Donde vas pataliebre'},
    
    {name:'Ernesto Sevilla', occupation:'comedian',catchPhrase:'A lo mejor os pensáis que somos tontos y a lo mejor lo que pasa es ¡que os lleváis una ostia!'},
    
    {name:' Pablo Chiapella', occupation:'actor',catchPhrase:'Si voy con lo que te doy'},

]

Celebrity.create(celebrities)

.then(celebritiesFromDB =>{
    console.log(celebritiesFromDB)
    console.log(celebritiesFromDB.length)
    //mongoose.connection.close()
})

.catch(error => console.log(`Error while creating a new celebrity ${error}`))
