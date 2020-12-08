require("dotenv").config();
require("./../app"); // fetch the db connection
const CelebrityModel = require("./../models/Celebrity"); // fetch the model to validate our user document before insertion (in database)
const MovieModel = require("./../models/Movie");

// const celebrities = [
//   {
//     name: "Ellen DeGeneres",
//     occupation: "Talk show host",
//     catchPhrase: "Let's dance",
//   },
//   {
//     name: "Matthew McConaughey",
//     occupation: "Actor",
//     catchPhrase: "Alright, alright, alright",
//   },
//   {
//     name: "Oprah Winfrey",
//     occupation: "Talk show host",
//     catchPhrase: "Everyone gets a car!",
//   },
// ];

// async function insertCelebrities() {
//   try {
//     await CelebrityModel.deleteMany();
//     const inserted = await CelebrityModel.insertMany(celebrities);
//     console.log(
//       `seed celebrities done : ${inserted.length} documents inserted !`
//     );
//   } catch (err) {
//     console.error(err);
//   }
// }

// insertCelebrities();

const movies = [
  {
    title: "Wonder Woman",
    genre: "Action",
    plot:
      "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
  },
  {
    title: "Knives Out",
    genre: "Drama",
    plot:
      "A detective investigates the death of a patriarch of an eccentric, combative family.",
  },
  {
    title: "On the Basis of Sex",
    genre: "Biography",
    plot:
      "The true story of Ruth Bader Ginsburg, her struggles for equal rights, and the early cases of a historic career that lead to her nomination and confirmation as U.S. Supreme Court Associate Justice.",
  },
];

async function insertMovies() {
  try {
    await MovieModel.deleteMany();
    const inserted = await MovieModel.insertMany(movies);
    console.log(`seed movies done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertMovies();
