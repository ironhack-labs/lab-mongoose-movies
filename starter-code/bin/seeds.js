const mongoose = require("mongoose");
const dbName = 'group-celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)

const Celebrity = require('../models/celebrity')

const Movie = require("../models/movies");
//Borra las colecciones que haya cuando plantas las nuevas
Celebrity.collection.drop()
Movie.collection.drop()

const celebrities =[
    
{name:'Chiquito',occupation:'actor',catchPhrase:'Uno que va...'},
{name:'J.J.Vaquero',occupation:'comedian',catchPhrase:'Mi primo el Erizo'},
{name:'Ignatius',occupation:'comedian',catchPhrase:'Un padre separado,tinerfeño,míope'}
]


const movies =[
    {title:'La maté por medio bollo',genre:'Drama',plot:'Disputa familiar por las sobras de un bollo muy rico'},
    {title:'Rambo',genre:'Action',plot:'Ex-combatiente de la guerra de Vietnam que con un arma en la mano es Dios'},
    {title:'Fue a buscar trabajo...',genre:'Comedy',plot:'Un hombre va a buscar trabajo y se encuentra con una sorpresa'}
]

Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`Created ${allCelebrities.length} celebrities`)
        
    })
    .catch(err => console.log('There was an error creating the celebrities', err))

Movie.create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the movies', err))