const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');


mongoose.connect('mongodb://localhost/express-cinema', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});


// const celebrities = [
//     {
//         name: "Ryan Reynolds",
//         occuptation: "Actor",
//         catchPhrase: "Time to make the chimi-fuckin'-changas."
//     },
//     {
//         name: "Keanu Reeves",
//         occuptation: "Actor",
//         catchPhrase: "People keep asking if I'm back and I haven't really had an answer, but yeah, I'm thinking I'm back.",
//     },
//     {
//         name: "Michael Cera",
//         occuptation: "Actor",
//         catchPhrase: "I have to go pee due to boredom.",
//     }
   
//   ];
  const movies = [
    {
        title: "Deadpool",
        genre: "Action",
        plot: "A revenge plot of man trying to get his body basck so he can be with the one he loves"
    },
    {
        title: "John Wick",
        genre: "Action",
        plot: "A revenge plot of a man taking down a whole mafie because they killed his dog that his dead wife gave him",
    },
    {
        title: "Scott Pilgram Saves The World",
        genre: "Adventure",
        plot: "A man taking out his girlfriends evil exs",
    }
   
  ];


  Movie.create(movies)
  .then((response)=>{
      console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })