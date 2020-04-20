const mongoose = require("mongoose");
const Movie = require("../models/movie")
// const Celebrity = require("../models/celebrity")

const movies = [
  {
  title: "Love in the time of corona",
  genre: "Romance",
  plot: "A story of boy meets girl in a time of social distancing. Will they ever get to hold hands?"
},
{
  title: "Ironwhack",
  genre: "Horror",
  plot: "20 innocent students go to a coding bootcamp where they are brutally tortured for nine weeks. Only the most sadistic ones will survive."
},
{
  title: "RoboDog",
  genre: "Action",
  plot: "A resurrected police dog uses his supernatural sniffing skills to fight the crime and save the world."
},
];

// const celebrities = [
//     {
//     name: "Violet Johansen",
//     occupation: "Actress",
//     catchPhrase: "I'll have what she's having. Make it double.",
//     },
//     {
//     name: "Frank LeBoss",
//     occupation: "Method actor",
//     catchPhrase: "Any volonteers, or should I pick one myself?",
//     },
//     {
//     name: "Ace Doberman",
//     occupation: "Animal actor",
//     catchPhrase: "I'll be back, if my master let's me.",
//     },
//     {
//     name: "Robert de Niro",
//     occupation: "Actor",
//     catchPhrase: "Michael, your father loves you.",
//     },
//     {
//     name: "Meryl Streep",
//     occupation: "Actor",
//     catchPhrase: "Please bore someone else with your questions...",
//     },
//     {
//     name: "Jim Carrey",
//     occupation: "Comedian",
//     catchPhrase: "I'm the top banana in a world full of monkeys.",
//     }
// ];


// mongoose
// .connect("mongodb://localhost/MongooseMovies", {
//   useNewUrlParser: true,
// })
// .then((self) => {
//     Celebrity.create(celebrities)
//     .then((dbResponse) => {
//       console.log(dbResponse);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })
// .catch((err) => {
//   console.log(err);
// });

    mongoose
    .connect("mongodb://localhost/MongooseMovies", {
      useNewUrlParser: true,
    })
    .then((self) => {
        Movie.create(movies)
        .then((dbResponse) => {
          console.log(dbResponse);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });