const {
  withDbConnection,
  dropIfExists
} = require("../withDBConnection");
const Celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await Celebrity.create(
    [{
        name: "Tom Cruise",
        occupation: "actor",
        catchPhrase: "yeah!"
      },
      {
        name: "Beyonce",
        occupation: "singer",
        catchPhrase: "all the single ladies"
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
      }
    ],
    (err, celebrity) => {
      if (err) return console.log("create error", err);
      else return Celebrity;
    }
  );
});
