const mongoose = require("mongoose");
const Celeb = require("../models/Celebrity");
const dbName = "celebdb";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebs = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
    catchPhrase:
      "Strictly speaking, there's no such thing as invention, you know. It's only magnifying what already exists."
  },
  {
    name: "Samuel L. Jackson",
    occupation: "Actor",
    catchPhrase:
      "Given That It's A Stupid-Ass Decision, I've Elected To Ignore It."
  },
  {
    name: "Rutger Hauer",
    occupation: "Actor,Writer",
    catchPhrase:
      "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die."
  },
  {
    name: "Scott Steiner",
    occupation: "Wrestler",
    catchPhrase: "The numbers don't lie, and they spell disaster for you."
  }
];

Celeb.create(celebs)
  .then(celebrities => {
    console.log(`Created ${celebs.length} celebs`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "Fallo en poblar la base de datos."));
