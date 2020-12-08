// create a test data set of valid users
require("dotenv").config();
require("../app"); // fetch the db connection CONNECTION A LA BASE
const CelebrityModel = require("./../models/celebrity"); // fetch the model to validate our user document before insertion (in database)

const celibrities = [
  { name: "Gwen Stefani", occupation: "singer", catchPhrase: "If I was a rich girl (na, na, na, na, na, na, na)" },
  { name: "Daniel Pennac", occupation: "writer", catchPhrase: "Ce sont rarement les réponses qui apportent la vérité, mais l’enchaînement des questions." },
  { name: "Christian Bale", occupation: "actor", catchPhrase: "I only sound intelligent when there's a good script writer around." }
];

async function insertCelibrities() {
  try {
    await CelebrityModel.deleteMany(); // empty the styles db collection
    const inserted = await CelebrityModel.insertMany(celibrities); // insert docs in db
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertCelibrities();