require("dotenv").config();
require("./../app");
const CelebrityModel = require("./../models/Celebrity.model");

const celebrities = [
  {
    name: "John Bogoss",
    occupation: "Drinking",
    catchPhrase: "To drink or not to drink that is not a question."
},
{
  name: "Michelle Teckel",
  occupation: "Complaining",
  catchPhrase: "Is it safe?"
},
{
  name: "Samantha Besos",
  occupation: "Playing, sometimes",
  catchPhrase: "Frankly, my dear, I don't give a damn."
}
];

(async function insertLabels() {
  try {
    await CelebrityModel.deleteMany(); // empty the album db collection

    const inserted = await CelebrityModel.insertMany(celebrities); // insert docs in db
    console.log(`seed albums done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
