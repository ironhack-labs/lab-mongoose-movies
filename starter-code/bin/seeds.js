const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movies.model')

const dbName = 'celebrity-project'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })



const celebrities = [
  { name: 'Paris Hilton',
    ocuppation: 'Who knows!',
    catchPhrase: "That's hot"
  },
  { name: 'Donald Trump',
    ocuppation: 'President of the USA',
    catchPhrase: 'Fake news'
  },
  { name:'Oprah Winfrey',
    ocuppation: 'media executive,',
    catchPhrase: "Aha! moment"

  }
]

Celebrity.create(celebrities, (err) => {
  if (err) {throw(err)}
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})



// const movies = [
//   { title: 'El ala sur de la Casa Blanca',
//     genre: 'drama',
//     plot: 'nadie ha ido al cine a verla y el director no da señales de vida' 
//   },
//   { title: 'Bienvenidos a Tele5',
//     genre: 'reality show',
//     plot: 'una panda de cantamañanas vive de que la gente sin gusto vea el programa en prime-time'

//   },
//   { title: 'Un día con Paris Hilton',
//     genre: 'documentary film',
//     plot: 'gente a la que pagan por ello pasan el día como invitados con Paris Hilton, a la que la productora más aún'
//   }
// ]

// Movie.create(movies, (err) => {
//   if (err) {throw(err)}
//   console.log(`Created ${movies.length} movies`)
//   mongoose.connection.close()
// })