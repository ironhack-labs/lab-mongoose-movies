const mongoose = require("mongoose");
const Celebrity = require("../Models/Celebrity");

mongoose.connect(`mongodb://localhost/Celebrity`);

const celebrities = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "Sayonara, baby"
  },
  {
    name: "Romeo Santos",
    occupation: "Bachata Singer",
    catchPhrase: "El chico de las poesías"
  },
  {
    name: "Belén Esteban",
    occupation: "People's Princess",
    catchPhrase: "Andrea, coño, cómete el pollo"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
