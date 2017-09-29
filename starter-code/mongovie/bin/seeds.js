const Celebrity = require('../models/celebrity.js')
const Movie = require('../models/movie.js')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongovie')

// const celebrities = [{
//     name: 'Kanye',
//     occupation: 'Rapper/designer/artist',
//     catchPhrase: "YOU AIN'T GOT THE ANSWERS SWAY"
//   },
//   {
//     name: 'Kanye2',
//     occupation: '2Rapper/designer/artist',
//     catchPhrase: "2YOU AIN'T GOT THE ANSWERS SWAY"
//   },
//   {
//     name: 'Kanye3',
//     occupation: '3Rapper/designer/artist',
//     catchPhrase: "3YOU AIN'T GOT THE ANSWERS SWAY"
//   }
// ]

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) throw err
//   else {
//     docs.forEach( (celebrity) => {
//       console.log('Celebrity:  ', celebrity.name)
//     })
//   }
//   mongoose.connection.close()
// })

const movies = [{
  title: 'Movie1',
  genre: 'horror',
  plot: 'someone died'
},
{
  title: 'Movie2',
  genre: 'horror, too',
  plot: '2 people died'
},
{
  title: 'Movie3',
  genre: 'horror3',
  plot: '3 people died'
},
]

Movie.create(movies, (err, docs) => {
  if ( err) throw err
  else {
    docs.forEach( (movie) => {
      console.log('Movie:  ', movie.title)
    })
  }
  mongoose.connection.close()
})