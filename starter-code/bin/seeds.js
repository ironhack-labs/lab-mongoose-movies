require("dotenv").config();
require("./../app"); // fetch the db connection
const CelebrityModel = require("./../models/Celebrity"); // fetch the model to validate our user document before insertion (in database)

const celebrities = [
  {
    name: "Ellen DeGeneres",
    occupation: "Talk show host",
    catchPhrase: "Let's dance",
  },
  {
    name: "Matthew McConaughey",
    occupation: "Actor",
    catchPhrase: "Alright, alright, alright",
  },
  {
    name: "Oprah Winfrey",
    occupation: "Talk show host",
    catchPhrase: "Everyone gets a car!",
  },
];

async function insertCelebrities() {
  try {
    await CelebrityModel.deleteMany();
    const inserted = await CelebrityModel.insertMany(celebrities);
    console.log(
      `seed celebrities done : ${inserted.length} documents inserted !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertCelebrities();
