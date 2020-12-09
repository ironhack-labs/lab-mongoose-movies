require("dotenv").config();
require("../app.js");
const CelebrityModel = require("../models/Celebrity");

const celebrities = [
  {
    name: "Jack Nicholson",
    occupation: "actor",
    catchPhrase:
      "With my sunglasses on, I'm Jack Nicholson. Without them, I'm fat and 60.",
  },
  {
    name: "Celine Dion",
    occupation: "singer",
    catchPhrase: "I've never been cool and I don't care",
  },
  {
    name: "Action Bronson",
    occupation: "rapper",
    catchPhrase: "All I believe in is food and myself.",
  },
];

async function insertTestCelebrities() {
  try {
    await CelebrityModel.deleteMany();
    const insertedCelebrities = await CelebrityModel.insertMany(celebrities);
    console.log("test celebrities seed done !");
    console.log(insertedCelebrities);
  } catch (err) {
    console.error(err);
  }
}

insertTestCelebrities();
