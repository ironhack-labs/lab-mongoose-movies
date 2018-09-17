// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'celebrities';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Chandler Bing",
//     occupation: "Advertising ",
//     catchPhrase: "Oh my god"
//   },
//   {
//     name: "Phoebe Buffay",
//     occupation: "Musician",
//     catchPhrase: "lalalalal"
//   },
//   {
//     name: "Joey Tribbiani",
//     occupation: "Actor",
//     catchPhrase: "How you doing?"
//   }
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });


const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Inception",
    genre: "Suspense",
    plot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable."
  },
  {
    title: "The Hangover",
    genre: "Comedy",
    plot: "Angelenos Doug Billings and Tracy Garner are about to get married. Two days before the wedding, the four men in the wedding party - Doug, Doug's two best buddies Phil Wenneck and Stu Price, and Tracy's brother Alan Garner - hop into Tracy's father's beloved Mercedes convertible for a 24-hour stag party to Las Vegas."
  },
  {
    title: "Fight Club",
    genre: "Action",
    plot: "A nameless first person narrator attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla, another fake attendee of support groups, his life seems to become a little more bearable."
  }
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});