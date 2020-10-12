require('../config/db.config')

let CelebrityModel = require('../models/celebrity')

// let MovieModel = require('../models/movie')
const mongoose= require('mongoose')




CelebrityModel.insertMany([
    { name: 'Matthew McConaughey', occupation: 'actor', catchPhrase: 'alright alright alright'},
    { name: 'Owen Wilson', occupation: 'actor', catchPhrase: 'wow'},
    { name: 'CardiB', occupation: 'singer', catchPhrase: 'okurr'}
])
    .then(()=>{
        console.log('Data was added!')
        mongoose.connection.close()
    })
    .catch(()=>{
        console.log('Data was not added!')
    })

    // MovieModel.insertMany([
    //     { title: 'Interstellar', genre: 'SciFy', plot: 'Space Odissey'},
    //     { title: 'Avenger:Endgame', genre: 'action', plot: 'Superheros doing stuf'},
    //     { title: 'Watchmen', genre: 'Thriller', plot: 'Superhero policemen stufff'}
    // ])
    //     .then(()=>{
    //         console.log('Data was added!')
    //         mongoose.connection.close()
    //     })
    //     .catch(()=>{
    //         console.log('Data was not added!')
    //     })
    