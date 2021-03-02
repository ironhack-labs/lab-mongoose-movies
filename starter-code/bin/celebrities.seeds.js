require("./../config/mongo");
const CelebrityModel = require("./../models/Celebrity");

const celebrities = [
  {
    name: "Buzz Lightyear",
    occupation: "Space ranger",
    catchPhrase: "To infinity and beyond!"
  },
  {
    name: "Scooby-Doo",
    occupation: "Dog (but investigator)",
    catchPhrase: "Scooby-doo bi-doooooooo!"
  },
  {
    name: "Sherlock Holmes",
    occupation: "Private investigator",
    catchPhrase: "Elementary, my dear Watson"
  }
];

CelebrityModel.insertMany(celebrities)
.then(console.log("Successfully added to the DB!"))
.catch(error => console.log(err));