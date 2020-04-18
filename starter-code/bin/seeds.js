const mongoose = require('mongoose')
const Celebrity = require('./../models/celebrity-model')
const Movie = require('./../models/movie-model')

const dbTitle = 'mongoose_movies'
mongoose.connect(`mongodb://localhost/${dbTitle}`)

// Celebrity.collection.drop()

// const celebrities = [
//   {
//     name: 'Petra Venj',
//     occupation: "Queen's Wrath",
//     catchPhrase: 'I blame myself for all this.',
//   },

//   {
//     name: 'Calus',
//     occupation: 'Emperor',
//     catchPhrase: 'Grow fat with strength!',
//   },

//   {
//     name: 'The Drifter',
//     occupation: 'Slimeball',
//     catchPhrase: "Alright, alright, alright! Let's see what we got!",
//   },
// ]

// Celebrity.create(celebrities)
//   .then((celebrities) => {
//     console.log(`${celebrities.length} celebrity entries created!`)
//     mongoose.connection.close()
//   })
//   .catch((err) => {
//     console.log(`An error occurred upon seeding the database: ${err}`)
//   })

const movies = [
  {
    title: 'The Battle of Saturn',
    genre: 'War Drama',
    plot: 'By falling, a Queen shall rise. Her people shall fall with her.',
  },

  {
    title: 'Ghost Community Theater Presents: Oryx, the Nighmare Daddy',
    genre: 'Comedy',
    plot: 'One Brave Ghost Versus the Death from Outer Space',
  },

  {
    title: 'Cerberus Vae III',
    genre: 'Action',
    plot:
      "Whether we wanted it or not, we've stepped into a war with the Cabal on Mars. So let's get to taking out their command, one by one. Valus Ta'aurc. From what I can gather he commands the Siege Dancers from an Imperial Land Tank outside of Rubicon. He's well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold.",
  },
]

Movie.create(movies)
  .then((movies) => {
    console.log(`${movies.length} movie entries created!`)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log(`An error occurred upon seeding the database: ${err}`)
  })
