require("dotenv").config();
require("./../config/mongo");
const CelebrityModel = require("../model/Celebrity");
const MovieModel = require("./../model/Movie");

const dataCeleb = [
  { name: "Toto", occupation: "stuntman", catchPhrase: "it hurts" },
  { name: "Donald", occupation: "being a duck", catchPhrase: "quack" },
  { name: "Kim", occupation: "Dating kanye", catchPhrase: "Hello" },
];
async function insertCeleb() {
  try {
    await CelebrityModel.deleteMany(); // empty the styles db collection
    const inserted = await CelebrityModel.insertMany(dataCeleb); // insert docs in db
    console.log(
      `seed Celebrities done : ${inserted.length} documents inserted !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertCeleb();

const dataMovie = [
  { title: "Indiana", genre: "Aventure", plot: "Indiana living in adventure" },
  { title: "The 5th element", genre: "SF", plot: "A movie about Ruby Rhod" },
  { title: "Die hard", genre: "Action", plot: "Yippee Ki Yay" },
];

async function insertMovie() {
  try {
    await MovieModel.deleteMany(); // empty the styles db collection
    const inserted = await MovieModel.insertMany(dataMovie); // insert docs in db
    console.log(`seed Movies done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertMovie();
