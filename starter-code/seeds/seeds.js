const withDbConnection = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await celebrity.collection.drop();
  await celebrity.create([
    { name: "asd", occupation: "asd", catchPhrase: "asd" },
    { name: "asd", occupation: "asd", catchPhrase: "asd" },
    { name: "asd", occupation: "asd", catchPhrase: "asd" },
  ]);
});