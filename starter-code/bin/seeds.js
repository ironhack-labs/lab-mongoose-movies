// const celebs = [
//   {
//     name: "Michael Jackson",
//     occupation: "singer",
//     catchphrase: "Hee-Hee"
//   },
//   {
//     name: "Tom Cruise",
//     occupation: "actor",
//     catchphrase: "I feel the need… the need for speed."
//   },
//   {
//     name: "Beyonce",
//     occupation: "singer",
//     catchphrase: "All the singe ladies!"
//   }
// ];

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/celebrities", () => {
//   console.log("Connected to DB! 💪");
// });

// const Celebrity = require("../models/celebrity.js");
// Celebrity.collection.drop();

// Celebrity.create(celebs)
//   .then(result => {
//     console.log(`Created ${result.length} celebrities. 🙌`);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

const movies = [
  {
    name: "Movie1",
    genre: "commedy",
    plot:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos ratione officia perferendis! Numquam ratione reprehenderit, incidunt molestias vel harum necessitatibus! Tempore voluptatem, id nulla corrupti ratione inventore nemo sapiente?"
  },
  {
    name: "Movie2",
    genre: "drama",
    plot:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos ratione officia perferendis! Numquam ratione reprehenderit, incidunt molestias vel harum necessitatibus! Tempore voluptatem, id nulla corrupti ratione inventore nemo sapiente?"
  },
  {
    name: "Movie3",
    genre: "action",
    plot:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos ratione officia perferendis! Numquam ratione reprehenderit, incidunt molestias vel harum necessitatibus! Tempore voluptatem, id nulla corrupti ratione inventore nemo sapiente?"
  }
];

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/celebrities", () => {
  console.log("Connected to DB! 💪");
});

const Movie = require("../models/movie.js");
Movie.collection.drop();

Movie.create(movies)
  .then(result => {
    console.log(`Created ${result.length} movies. 🙌`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
