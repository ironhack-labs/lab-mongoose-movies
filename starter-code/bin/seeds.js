const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const dbName = "celebrity-mongoose";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Johnny Depp",
    occupation: "Actor",
    catchPhrase: "This is bat country!"
  },
  {
    name: "Dwayne Johnson",
    occupation: "Actor",
    catchPhrase: "Toretto, stop!"
  },
  {
    name: "Samuel L. Jackson",
    occupation: "Actor",
    catchPhrase: "Say What Again! I dare you, I double-dare you, muthafucka!"
  },
  {
    name: "Chico da Tina",
    occupation: "Singer",
    catchPhrase: "Entrei na Cabral Moncada a fumar ganza, ninguém disse nada."
  },
  {
    name: "Samuel L. Jackson 2",
    occupation: "Actor",
    catchPhrase: "This is a TASTY BURGER!"
  },
  {
    name: "Samuel L. Jackson 3",
    occupation: "Actor",
    catchPhrase: "Avengers, assemble!"
  },
  {
    name: "Samuel L. Jackson 4",
    occupation: "Actor",
    catchPhrase: "Goddamnit..."
  },
  {
    name: "Principe Ouro Negro",
    occupation: "Actor",
    catchPhrase: "Speida"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
