
require('../app')
const mongoose = require('mongoose')

/*const Celebrity = require('../models/celebrity')

const celebrities = [
    
    {name:'Al Pacino', occupation:'Actor',catchPhrase:'Sometimes it’s better to be with the devil you know than the angel you didn’t know.'},
    
    {name:'Vin Diesel', occupation:'Actor',catchPhrase:'It doesn’t matter whether you win by an inch or a mile, winning is winning.'},
    
    {name:'Robert de Niro', occupation:'actor',catchPhrase:'‘You talkin’ to me?’'},

]

Celebrity.create(celebrities)

.then(celebritiesFromDB =>{
    console.log(celebritiesFromDB)
    console.log(celebritiesFromDB.length)
    //mongoose.connection.close()
})

.catch(error => console.log(`Error while creating a new celebrity ${error}`))*/


const Movie = require('../models/Movie.model')

const movies = [
    {title:'The Godfather', genre:'drama',plot:'The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.'},

    {title:'The fast and the furious', genre:'action',plot:'With Dom and Letty on their honeymoon, Brian and Mia retired and the rest of the gang living in peace, everything seems to be quiet. However, a mysterious woman seduces Dom into the world of crime and betrays the gang. Now they will have to unite to bring home the man who made them a family and stop Cipher from unleashing chaos.'},

    {title:'Taxi driver', genre:'action', plot:'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.'}
]


Movie.create(movies)

.then(moviesFromDB =>{
    console.log(moviesFromDB)
    console.log(moviesFromDB.length)
    mongoose.connection.close()
})