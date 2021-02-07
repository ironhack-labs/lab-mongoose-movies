require('dotenv').config()

const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

mongoose.connect(`mongodb://localhost/${process.env.DB}`)

// const celebs = [
//     {
//         name: "Chiquito de la Calzada",
//         occupation: "God's main entertainer",
//         catchPhrase: "¡Por la gloria de mi madre!",
//         image: "https://lh3.googleusercontent.com/proxy/JtvtXkzsTUNNllPqslwI8RcOqYDBXCE_6A4yEdgL1r7zUqQ3Z6J1EsMx5wPmyVKnSBA8y4gGyrZ-UNH560AdoTkV4Lg4S-zA0Q3aANj0vNF9jW4HWeK-JnCSqVqr8tgKxvZtjTOI4M7DL81BGeqYYDuZxgI1qoTU6fjFKGKayh04Qi6SkFek"
//     },
//     {
//         name: "Davie504",
//         occupation: "Youtuber",
//         catchPhrase: "What's up, Slappers!",
//         image: "https://i.pinimg.com/originals/04/80/fa/0480faa72a67ba6cdd3bc87de26c819d.gif"
//     },
//     {
//         name: "John 'Hannibal' Smith",
//         occupation: "A-Team leader",
//         catchPhrase: "I love it when a plan comes together",
//         image: "https://i.gifer.com/6Cr9.gif"
//     }
// ]

// Celebrity
//     .create(celebs)
//     .then(response => {
//         console.log(`${response.length} celebrities seeded in the DB`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(`there has been an error:`, err))

const movies = [
    {
        title: "Ger y Teo en el Congo",
        genre: "Nouvelle Vague",
        plot: "Los chicos se van de viaje para dejar de fumar.",
        cast: ['Germán Álvarez', 'Teo']
    },
    {
        title: "Clash of Titans",
        genre: "Surrealism",
        plot: "A Spanish comedian tries to teach Spanish to an ex green beret in heaven.",
        cast: ['Chiquito de la Calzada', 'John "Hannibal" Smith']
    },
    {
        title: "Party!",
        genre: "Hyperlink cinema",
        plot: "Bizarre encounter of colorful characters.",
        cast: ['Germán Álvarez', 'Teo', 'Chiquito de la Calzada', 'John "Hannibal" Smith', 'Davie504']
    }
]

Movie
    .create(movies)
    .then(response => {
        console.log(`${response.length} movies seeded in the DB`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`there has been an error:`, err))