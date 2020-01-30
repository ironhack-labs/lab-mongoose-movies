const { withDbConnection, dropIfExists } = require("../withDbConnection");
const mongoose = require("mongoose");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await dropIfExists(celebrity);
  await celebrity.create(
    [
      {
        name: "Bad Gyal",
        occupation: "Singer",
        catchPhrase: "El pussy k mana."
      },
      {
        name: "La Zowi",
        occupation: "Singer",
        catchPhrase:
          "Lo que hago es música punk y la música punk no se explica."
      },
      {
        name: "DJ Florentino",
        occupation: "Producer",
        catchPhrase: "El más romántico de los románticos."
      },
      {
        name: "Cecilio G.",
        occupation: "Singer",
        catchPhrase: "Yo soy de la calle, yo no soy Bad Gyal."
      }
    ],
    err => {
      console.log("Database seeded");
      if (err != null) {
        console.log(err);
      }
      mongoose.disconnect();
    }
  );
});
