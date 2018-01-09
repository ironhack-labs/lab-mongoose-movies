const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity', {
  useMongoClient: true
});

const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');


// let celebritiesData = [
//     {
//         name: 'Kad',
//         occupation: 'Comedian',
//         catchPhrase: "C'est Jean Michel!"
//     },
//     {
//         name: 'Olivier',
//         occupation: 'Author',
//         catchPhrase: "Rippear ? C'est Bullit"
//     },
//     {
//         name: 'Franck Dubosc',
//         occupation: 'Comedian',
//         catchPhrase: "Alors ? On attend pas Patrick ?!"
//     }
// ]

// Celebrity.create(celebritiesData, (err, docs) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         docs.forEach(patrick => {
//             console.log(patrick);
//         });
//     }
//     mongoose.connection.close();
// })

let moviesData = [
  {
    title: "Forrest Gump",
    genre: "Comedy",
    plot: "Amen donné tu as le militaire il se choppe la gonzesse...."
  },
  {
    title: "Matrix",
    genre: "Scifi",
    plot: "Amen donné tu as l'élu il se choppe la gonzesse..."
  },
  {
    title: "Asterix",
    genre: "Comedy",
    plot: "Amen donné tu as le nain il se choppe la gonzesse...."
  },
]

Movie.create(moviesData, (err, docs) => {
    if (err) {
        throw err;
    }
    else {
        docs.forEach(patrick => {
            console.log(patrick);
        });
    }
    mongoose.connection.close();
})