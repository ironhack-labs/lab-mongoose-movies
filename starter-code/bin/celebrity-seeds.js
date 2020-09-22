require("dotenv").config();
const CelebrityModel = require("./../models/Celebrity");

const celebrities = [
  {
    name: "Sean Connery",
    occupation: "Actor",
    catchphrase: "Bond…James Bond."
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchphrase: "I’ll be back."
  },
  {
    name: "Bugs Bunny",
    occupation: "Looney Tune",
    catchphrase: "What's Up Doc?"
  }
 
];

CelebrityModel.create(celebrities)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));