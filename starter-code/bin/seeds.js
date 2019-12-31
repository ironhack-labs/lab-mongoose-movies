const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbCelebrities = "celebrities";
mongoose.connect(`mongodb://localhost/${dbCelebrities}`);

const celebrities = [
  {
    name: "Christian Bale",
    occupation: "Actor",
    catchPhrase: `I'm Batman`
  },
  {
    name: "Leonardo DiCaprio",
    occupation: "Actor",
    catchPhrase: "A real inspiration cannot be falsified"
  },
  {
    name: "Jack Sparrow",
    occupation: "Pirate",
    catchPhrase: "If you were waiting for the opportune moment, that was it"
  }
];

// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });
