const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model')

mongoose.connect(`mongodb://localhost/celebrities`, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
});

// const celebrities = [
//     {
//         name: "Diego Luna",
//         occupation: "actor",
//         catchPhrase: "This role on the movie 'Y tu mama tambien' brought him international stardom"
//     },
//     {
//         name: "Matt Damon",
//         occupation: "actor",
//         catchPhrase: "He is ranked most bankable star"
//     },
//     {
//         name: "Jennifer Lopez",
//         occupation: "actress",
//         catchPhrase: "She is regarded as the most influential Hispanic performer in the United States"
//     }
// ]

// Celebrity.insertMany(celebrities)
// .then(inserted => {
//   console.log('success', inserted);
//   mongoose.disconnect();
// })
// .catch(err => console.log(err));

const movies = [
  {
    title: "Modiliani",
    genre: "Drama",
    plot: "In early 20th-century Paris, Pablo Picasso (Omid Djalili) has already established himself in the art world, while his friend and artistic rival Amedeo Modigliani (Andy Garcia) is trying desperately to catch up."
},
{
  title: "Edward Scissorhands",
  genre: "Drama",
  plot: "A scientist (Vincent Price) builds an animated human being -- the gentle Edward (Johnny Depp). The scientist dies before he can finish assembling Edward, though, leaving the young man with a freakish appearance accentuated by the scissor blades he has instead of hands."
},
{
  title: "The Matrix",
  genre: "Sci-Fi",
  plot: "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld"
}
]

Movie.insertMany(movies)
.then(inserted => {
  console.log('succes', inserted);
  mongoose.disconnect();
})
.catch(err => console.log(err))
