
require("dotenv").config();
require("../app"); 

//const CelebrityModel = require("./../models/celebrity"); // fetch the model to validate our user document before insertion (in database)
const MovieModel = require("./../models/movie");



// const celebrities = [
//   { name: "Gwen Stefani", occupation: "singer", catchPhrase: "If I was a rich girl (na, na, na, na, na, na, na)" },
//   { name: "Daniel Pennac", occupation: "writer", catchPhrase: "Ce sont rarement les réponses qui apportent la vérité, mais l’enchaînement des questions." },
//   { name: "Christian Bale", occupation: "actor", catchPhrase: "I only sound intelligent when there's a good script writer around." }
// ];

const movies = [
  { title: "Titanic", genre: "eau de rose", plot: "Draw me like one of your French girls" },
  { title: "Forest Gump", genre: "dramédie", plot: "Life's like a box of chocolate" },
  { title: "Harry Potter", genre: "fantasy", plot: " Yer a wizard Harry." }
];

// async function insertCelibrities() {
//   try {
//     await CelebrityModel.deleteMany(); // empty the styles db collection
//     const inserted = await CelebrityModel.insertMany(celebrities); // insert docs in db
//     console.log(`seed labels done : ${inserted.length} documents inserted !`);
//   } catch (err) {
//     console.error(err);
//   }
// }

async function insertMovies() {
  try {
    await MovieModel.deleteMany(); // empty the styles db collection
    const inserted = await MovieModel.insertMany(movies); // insert docs in db
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}


// insertCelibrities();
insertMovies();