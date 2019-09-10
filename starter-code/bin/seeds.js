//CELEBRETIES

// const mongoose = require("mongoose");
// const Celebrity = require("../models/Celebrity");

// mongoose.connect("mongodb://localhost/lab-mongoose-movies", {
//   useNewUrlParser: true
// });

// const celebrities = [
//   {
//     name: "Susana Vieira",
//     occupation: "actor",
//     catchPhrase: "Não tenho paciência com quem está começando!",
//   },
//   {
//     name: "Faustão",
//     occupation: "TV host",
//     catchPhrase: "Ôloco, meu!",
//   },
//   {
//     name: "Palmirinha",
//     occupation: "cooker",
//     catchPhrase: "Amiguinha!",
//   }
// ];

// Celebrity.insertMany(celebrities)
//   .then(data => {
//     console.log("Success! Added " + data.length + " celebrities in the collection");
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

//MOVIES
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

mongoose.connect("mongodb://localhost/lab-mongoose-movies", {
  useNewUrlParser: true
});

const movies = [
  {
    title: "A Fuga",
    genre: "drama",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue nunc sed enim venenatis malesuada. Donec ut ligula id quam suscipit rutrum vel eu nunc. Mauris mattis orci purus, eu ultricies lectus varius eget. Aliquam eu magna ac eros posuere vulputate."
  },
  {
    title: "A Noite",
    genre: "crime",
    plot: "Donec efficitur tellus turpis, ut lacinia risus tempor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
  },
  {
    title: "A Praia",
    genre: "romance",
    plot: "Morbi vitae laoreet justo. Proin non lectus tellus. Cras enim leo, vestibulum vitae est at, laoreet lobortis dui. Nulla consequat eleifend leo, in semper urna elementum vel"
  }
]

Movie.insertMany(movies)
  .then(data => {
    console.log("Success! Added " + data.length + " movies in the collection");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
