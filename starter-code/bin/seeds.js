//IMPORTACIONES

const mongoose= require('mongoose')
const { create } = require('../models/Celebrity.model.js')
const Celebrity= require('../models/Celebrity.model.js')
const Movie= require('../models/Movie.model.js')

//CONECTAR MONGOOSE
mongoose.connect(`mongodb://localhost/starter-code`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//ELEMENTOS PARA AÑADIR A LA DB (CELEBS)

// const celebrities= [
//     {name: "Link", occupation: "Hero of Hyrule", catchPhrase: "Hoot, hooph, hyya!" },
//     {name: "Navi", occupation: "Quest guide", catchPhrase:"Hey, listen!"},
//     {name: "Zelda", occupation: "Princess of Hyrule", catchPhrase: "Courage need not be remembered, for it is never forgotten."}
// ]

//PASAR LOS ELEM A LA DB USANDO EL MODELO
// Celebrity.create(celebrities)
// .then(celebsFromDB => {
//     console.log(`Created ${celebsFromDB.length} celebs`);
//     mongoose.connection.close();
// })
// .catch(err => console.log(`Something went wrong when creating celebs: ${err}`))


//ELEMENTOS PARA AÑADIR A LA DB (MOVIES)
const movies=[
    {title: "Finding Navi", genre:"Action", plot:"Link finds Navi after Majora´s disaster"},
    {title: "Skull kid´s journey", genre:"Thriller", plot:"idk"}
]

//PASAR LOS ELEM A LA DB USANDO EL MODELO
Movie.create(movies)
.then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} celebs`);
    mongoose.connection.close();
})
.catch(err => console.log(`Something went wrong when creating movies: ${err}`))