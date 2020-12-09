// create a test data set of valid users
require("dotenv").config();
require("./../app"); // fetch the db connection
const CelebrityModel = require("./../models/Celebrity"); // fetch the model to validate our user document before insertion (in database)
const MovieModel = require("../models/Movie");

const styles = [
  { name: "Sheldon Cooper", occupation: "actor", catchphrase: "Bazinga!" },
  { name: "DJ Khaled", occupation: "singer", catchphrase: "Another One" },
  {
    name: "Daniel Craig",
    occupation: "actor",
    catchphrase: "My name is Bond, James Bond",
  },
];

const movies = [
  {
    title: "Parasite",
    genre: "Drama",
    plot: "test",
  },
  {
    title: "Black Panther",
    genre: "Action",
    plot: "Test",
  },
];

async function insertCelebrities() {
  try {
    await CelebrityModel.deleteMany(); // empty the styles db collection
    const inserted = await CelebrityModel.insertMany(styles); // insert docs in db
    console.log(
      `seed celebrities done : ${inserted.length} documents inserted !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertCelebrities();

async function insert() {
  try {
    await CelebrityModel.insertMany(celebrities);
    MovieModel.insertMany(movies);
    console.log("Inserted Celebrities & Movies");
  } catch (err) {
    console.error(err);
  }
}

insert();
