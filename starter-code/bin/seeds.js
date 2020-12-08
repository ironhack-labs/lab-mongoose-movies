require("dotenv").config();
require("./../config/mongo"); 
const CelebrityModel = require("./../model/celebrity"); 

const celebrities = [
  {
    name: "Valentino Rossi",
    occupation: "athlete",
    catchPhrase:
      "Riding a race bike is an art - a thing that you do because you feel something inside.",
  },
  {
    name: "Samuel L. Jackson",
    occupation: "actor",
    catchPhrase:
      "I love comic books and I love anime.",
  },
  {
    name: "John Denver",
    occupation: "singer",
    catchPhrase: "Peace is a conscious choice.",
  },
];

async function insertCelebrities() {
  try {
    await CelebrityModel.deleteMany(); // empty the styles db collection
    const inserted = await CelebrityModel.insertMany(celebrities); // insert docs in db
    console.log(
      `seed celebrities done : ${inserted.length} documents inserted !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertCelebrities();