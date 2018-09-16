const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//    name: "Sheldon Cooper",
//    occupation: "scientist",
//    catchPhrase: "Bazinga!"
//   },
//   {
//     name: "Steve Urkel",
//     occupation: "inventor",
//     catchPhrase: "Did I do that?"
//   },
//   {
//     name: "Joey Tribbiani",
//     occupation: "actor",
//     catchPhrase: "How you doin'?"
//   }
// ]

const movies = [
  {
    title: "A Nice Fake Movie",
    genre: "Fake",
    plot: "Nisi magna ut deserunt elit deserunt labore nostrud aliquip irure excepteur. Aliquip duis magna cupidatat reprehenderit sit aliqua mollit. Irure quis qui dolor sit incididunt. Consequat amet deserunt aute voluptate in aliquip magna."
   },
   {
    title: "A Better Fake Movie",
    genre: "Fake",
    plot: "Nisi magna ut deserunt elit deserunt labore nostrud aliquip irure excepteur. Aliquip duis magna cupidatat reprehenderit sit aliqua mollit. Irure quis qui dolor sit incididunt. Consequat amet deserunt aute voluptate in aliquip magna."
   },
   {
    title: "The Definitive Fake Movie",
    genre: "Fake",
    plot: "Nisi magna ut deserunt elit deserunt labore nostrud aliquip irure excepteur. Aliquip duis magna cupidatat reprehenderit sit aliqua mollit. Irure quis qui dolor sit incididunt. Consequat amet deserunt aute voluptate in aliquip magna."
   }
]

// Celebrity.create(celebrities)
// .then (() => {
//   console.log("Celebrities created")
// })
// .then (() => {
//   mongoose.disconnect()
// })
// .catch (err => {
//   console.log(err)
// });

Movie.create(movies)
.then (() => {
  console.log("Movies created")
})
.then (() => {
  mongoose.disconnect()
})
.catch (err => {
  console.log(err)
});
