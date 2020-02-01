const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/Celebrity");

withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await Celebrity.create([
    {
      name: "Arnold Schwarzenegger",
      occupation: "Actor",
      catchPhrase: "Hasta la vista, baby!"
    },
    {
      name: "Will Smith",
      occupation: "Actor",
      catchPhrase: "Aw, hell no!"
    },
    {
      name: "Brad Pitt",
      occupation: "Actor",
      catchPhrase: "You must lose everything in order to gain anything."
    }
  ]);
});
