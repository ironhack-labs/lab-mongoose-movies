const mongoose = require("mongoose");
// const Celebrity = require("../models/celebrity");
const School = require("../models/school")

const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const celebrities = [
//   {
//     name: "Harry Potter",
//     occupation: "Auror",
//     catchPhrase: "Expelliarmus",
//   },
//   {
//     name: "Hermione Granger",
//     occupation: "Ministry of Magic",
//     catchPhrase: "Wingardium Leviosa",
//   },
//   {
//     name: "Ron Weasley",
//     occupation: "Auror",
//     catchPhrase: "Stupefy",
//   },
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

const school = [
  {
    house: "Gryffindor",
    colour: "Red and gold",
    animal: "Lion",
  },
  {
    house: "Hufflepuf",
    colour: "Yellow and black",
    animal: "Badger",
  },
  {
    house: "Ravenclaw",
    colour: "Blue and bronze",
    animal: "Eagle",
  },
  {
    house: "Slytherin",
    colour: "Green and silver",
    animal: "Snake",
  },
];

School.create(school, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${school.length} school`)
  mongoose.connection.close();
});