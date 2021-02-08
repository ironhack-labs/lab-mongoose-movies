const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrity-model");
const Movie = require("./../models/movies-model");
require("dotenv").config();

// const newCelebrities = [
//  { name: "Jason Momoa",
//    occupation: "actor",
//    catchPhrase: "I lay naked in furs a lot. I think I’m naked more than I talk"

//  },
//  {
//   name: "James Franco",
//   occupation: "actor",
//   catchPhrase: "They say living well is the best revenge but sometimes writing well is even better."
//  },
//  {
//   name: "Eva Green",
//   occupation: "actress",
//   catchPhrase: "I'm French, so I'm quite lazy about exercising, and I smoke. But I do love going for a run in the morning with my dog. That's all."
//   }
// ]

const newMovies = [
  {
    title: "sad movie",
    genre: "drama",
    plot: "I lay naked in furs a lot. I think I’m naked more than I talk",
  },
  {
    title: "happy movie",
    genre: "comedy",
    plot:
      "They say living well is the best revenge but sometimes writing well is even better.",
  },
  {
    title: "scary movie",
    genre: "horror",
    plot:
      "I'm French, so I'm quite lazy about exercising, and I smoke. But I do love going for a run in the morning with my dog. That's all.",
  },
];

// mongoose.connect(
//     `mongodb://localhost:27017/${process.env.MONGO_DB}`,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//     .then((x) => {
//     // 2. DROP THE DATABASE TO CLEAR IT
//     console.log('Connected to the DB');
//     const pr = x.connection.dropDatabase();
//     return pr;
//   })
//   .then(() => {

//     const pr = Celebrity.create(newCelebrities);
//     return pr;
//   })
//     .then((createdCelebrities) => {
//       console.log(`Created ${createdCelebrities.length} celebrities.`);
//       mongoose.connection.close();
//   })
//   .catch( (err) => console.log('Error connection to the DB', err));

mongoose
  .connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    // 2. DROP THE DATABASE TO CLEAR IT
    console.log("Connected to the DB");
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    const pr = Movie.create(newMovies);
    return pr;
  })
  .then((createdMovies) => {
    console.log(`Created ${createdMovies.length} movies.`);
    mongoose.connection.close();
  })
  .catch((err) => console.log("Error connection to the DB", err));
