require("dotenv").config();
require("./../config/mongo"); // fetch the db connection
const CelebrityModel = require("./../models/celebrity"); // fetch the model to validate our user document before insertion (in database)

const celebrities = [
  {
    name: "John Cena",
    occupation: "athlete",
    catchPhrase:
      "Be loyal to those who are loyal to you. And respect everyone, even your enemies and competition.",
  },
  {
    name: "Jean-Claude Van Damme",
    occupation: "actor",
    catchPhrase:
      "I am fascinated by air. If you remove the air from the sky, all the birds would fall to the ground. And all the planes too.",
  },
  {
    name: "Freddy Mercury",
    occupation: "singer",
    catchPhrase: "I won't be a rockstar. I will be a legend.",
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
