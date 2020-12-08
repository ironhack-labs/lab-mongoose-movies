// create a test data set of valid users
require("dotenv").config();
const MovieModel = require("./../models/movie");

// const celebrity = [
//   {
//     name: "Jennifer Lopez",
//     occupation: "Actress",
//     catchPhrase: "Jenny from the block",
//   },
//   {
//     name: "Beyonce",
//     occupation: "Singer",
//     catchPhrase: "All the single Ladies",
//   },
//   { name: "Stefanos Tsitsipas", occupation: "Youtuber", catchPhrase: "Pame" },
// ];

// async function insertCelebrities() {
//   try {
//     await CelebrityModel.deleteMany(); // empty the users db collection
//     const insertedCelebrity = await CelebrityModel.insertMany(celebrity); // insert docs in db
//     console.log("test celebrity done !");
//     console.log(insertedCelebrity);
//   } catch (err) {
//     console.error(err);
//   }
// }

// insertCelebrities();

const movie = [
  {
    titre: "Titanic",
    genre: "Romance",
    plot: "Love story",
  },
  {
    titre: "Pulp Fiction",
    genre: "Fiction",
    plot: "Action story",
  },
  { titre: "Avatar", genre: "Animation", plot: "Chasing aliens" },
];

async function insertMovies() {
  try {
    await MovieModel.deleteMany(); // empty the users db collection
    const insertedMovies = await MovieModel.insertMany(movie); // insert docs in db
    console.log("test movies done !");
    console.log(insertedMovies);
  } catch (err) {
    console.error(err);
  }
}

insertMovies();
