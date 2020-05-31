const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity.js');

mongoose.connect(`mongodb://localhost/starter-code`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const arrCelebrity=[
    {
        name:'Charles Chaplin',
        occupation:'Actor',
        catchPhrase:'Aprende como si fueras a vivir toda la vida y vive como si fueras a morir mañana '
    },
    {
        name:'Walt Disney',
        occupation:'Guionista',
        catchPhrase:'Piensa, Sueña, Cree y Atrévete'
    },
    {
        name:'Marilyn Monroe',
        occupation:'Actriz',
        catchPhrase:'Si dejas salir tus miedos, tendrás más espacio para vivir tus sueños'
    }
]

Celebrity.create(arrCelebrity)
.then(celebrities=>console.log("Celebries created", celebrities))
.catch(err=>console.log("Impossible to create celebrities"))