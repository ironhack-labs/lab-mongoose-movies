// const mongoose = require('mongoose')
// const Celebrity = require('../models/Celebrity.js')

// mongoose.connect(`mongodb://localhost:27017/celebrity`)

// const celeb = [
//     {
//       name : "Brad Pitt",
//       occupation: "Actor",
//       catchPhrase: "I love you Angelina",
//     },
//     {
//         name : "Belinda",
//         occupation: "Singer",
//         catchPhrase: "I love you Andres!!!😍",
//     },
//     {
//         name : "Scarlett Johansson ",
//         occupation: "Actor",
//         catchPhrase: "I love you more Andressss!!!!❤️️ ❤️️ ",
//     },    
//   ];

//   Celebrity.create(celeb)
//   .then(celeb=>{
//       console.log(`Created ${celeb.length} celeb`)
//       mongoose.connection.close()
//   })

const mongoose = require('mongoose')
const Movie = require('../models/Movie.js')

mongoose.connect(`mongodb://localhost:27017/celebrity`)

const mov = [
    {
        title: "Belinda and Andres",
        genre: "History",
        plot: "I love you Andres💛",
    },
    {
        title: "Scarlet and Andres",
        genre: "History",
        plot: "I love you more Andres💛💛",
    },
    {
        title: "Victoria Justice and Andres",
        genre: "History",
        plot: "I love you Andres💛💛💛 ",
    },
];

Movie.create(mov)
    .then(mov => {
        console.log(`Created ${mov.length} mov`)
        mongoose.connection.close()
    })