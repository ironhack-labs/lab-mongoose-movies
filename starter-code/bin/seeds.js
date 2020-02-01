const {
  withDbConnection,
  dropIfExists
} = require("../withDBConnection");
const Celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await Celebrity.create(
    [{
        name: "Thom Yorke",
        occupation: "musician",
        catchPhrase: "creep"
      },
      {
        name: "Quentin Tarantino",
        occupation: "director",
        catchPhrase: "say 'what' again"
      },
      {
        name: "Kobe Briant",
        occupation: "basketball player",
        catchPhrase: "Kobe!"
      },
      {
        name: "Steve Jobs",
        occupation: "entrepreneur",
        catchPhrase: "think different"
      },
      {
        name: "Esther Perel",
        occupation: "writer",
        catchPhrase: "rethinking infidelity"
      },
      {
        name: "Anthony Bourdain",
        occupation: "chef",
        catchPhrase: "kitchen confidential"
      },
      {
        name: "Leo Laporte",
        occupation: "journalist",
        catchPhrase: "another twit is in the can"
      },
      {
        name: "Peter Attia",
        occupation: "physician",
        catchPhrase: "longevity"
      },
      {
        name: "Elon Musk",
        occupation: "entrepreneur",
        catchPhrase: "we live in a simulation"
      },
      {
        name: "Ira Glass",
        occupation: "journalist",
        catchPhrase: "this american life"
      },
    ]
  )
});
