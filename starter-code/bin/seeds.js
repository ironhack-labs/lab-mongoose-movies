const celebrity = require("../models/Celebrity");
const withDbConnection = require("../withDbConnection");

withDbConnection(async () => {
  await celebrity.collection.drop();
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
