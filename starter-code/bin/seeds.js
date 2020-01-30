const celebrity = require("../models/Celebrity");
const { withDbConnection, dropIfExists } = require("../withDbConnection");

withDbConnection(async () => {
  await dropIfExists(celebrity);
  await celebrity.create([
    {
      name: "Dani Rovira",
      occupation: "Comedian",
      catchPhrase: "Er taperwé"
    },
    {
      name: "Heath Ledger",
      occupation: "Actor",
      catchPhrase: "Why so serious"
    },
    {
      name: "Chadwick Boseman",
      occupation: "Actor",
      catchPhrase: "Wakanda forever"
    }
  ]);
});
