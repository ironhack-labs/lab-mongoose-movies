require('../app')
const mongoose = require('mongoose')


const Celebrity = require('../models/celebrity'); 

let celebrities =[
    { name: 'Belen Esteban', occupation: 'Colaboradora', catchPhrase: 'Andreita, comete el pollo' },
    { name: 'Ylenia Padilla', occupation: 'Concursanta', catchPhrase: 'Uff, perdona' },
    { name: 'Isabel Pantoja', occupation: 'Folclorica', catchPhrase: 'Dientes, dientes que eso es lo que le jode' }
] 

celebritiesModel.insertMany(celebrities)
    .then(() => {
        mongoose.connection.close()
            .then(() => {
                console.log('Heyy connection is closed!')
                
            }) 
            
            .catch(() => ('conection failed')
    }) 



