require('../configs/db.config.js')
const mongoose = require('mongoose')

const Celebrities = require('../models/Celebrity.model')
const Movies = require('../models/Movie.model')


const celebrities = [
    { name: 'Michael Phelps', occupation: 'sports', catchPhrase: 'me voy a la pisci' },
    { name: 'DePedro', occupation: 'singer', catchPhrase: 'lalalala' },
    { name: 'Paolo Conte', occupation: 'singer', catchPhrase: 'sono italiano' },
    { name: 'Lady Gaga', occupation: 'singer', catchPhrase: "I've always been famous, it's just no one knew it yet." },
    { name: 'Stephen Hawking', occupation: 'scientist', catchPhrase: 'The downside of my celebrity is that I cannot go anywhere in the world without being recognized. It is not enough for me to wear dark sunglasses and a wig. The wheelchair gives me away.' }
]
const movies = [
    { name: 'Buscando a Nemo', genre: 'kids', plot: '' },
    { name: 'El nombre de la rosa', genre: 'old', plot: 'lalalala' },
    { name: 'GOT', genre: 'fantasy', plot: 'sono italiano' },
    { name: 'Harry Potter', genre: 'fantasy', plot: 'Alohomora' },
    { name: 'La vita è bella', genre: 'history', plot: 'about nazis' },

]

Celebrities.deleteMany({})
    .then(() => Celebrities.create(celebrities))
    .then(celeb => {
        console.log('DB Already updated')
            // mongoose.connection.close()
    })
    .catch(e => console.log('Error: ', e))

Movies.deleteMany({})
    .then(() => Movies.insertMany(movies))
    .then(mov => {
        console.log('DB Already updated')
        mongoose.connection.close()
    })
    .catch(e => console.log('Error: ', e))