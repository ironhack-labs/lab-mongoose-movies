const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

// seed celebrities collection
const celebrities = [
  {
    name: "John F Kennedy",
    ocupation: "Politician",
    catchPhrase:
      "Ask not what your country can do for you, but what you can do for your country.",
  },
  {
    name: "Buzz Aldrin",
    ocupation: "Astronaut",
    catchPhrase: "Magnificent desolation.",
  },
  {
    name: "James Bond",
    ocupation: "Spy",
    catchPhrase: "The name is Bond. James Bond.",
  },
];

Celebrity.create(celebrities)
  .then((allCelebrities) =>
    console.log(`Added ${allCelebrities.length} to ${dbName}`)
  )
  .catch((err) => console.log(`An error has ocurred: ${err}`));
