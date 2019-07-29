const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
mongoose.connect(`mongodb://localhost/${process.env.DB}`, {
  useNewUrlParser: true
});
Celebrity.collection.drop();

const celebs = [
  {
    name: "Juana",
    occupation: "Singer",
    catchPhrase: "Gimme me your money and get out!"
  },
  {
    name: "Pedro",
    occupation: "Astronaut",
    catchPhrase: "The earth is flat"
  },
  {
    name: "Oliver",
    occupation: "Survivor",
    catchPhrase: "No tv and no beer make Oliver go crazy"
  }
];

Celebrity.create(celebs, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebs.length} celebrities`);
  mongoose.connection.close();
});
