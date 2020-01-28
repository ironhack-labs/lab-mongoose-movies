const withDbConnection = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await celebrity.collection.drop();
  await celebrity.create([
    { name: "", occupation: "", catchPhrase: "" },
    { name: "", occupation: "", catchPhrase: "" },
    { name: "", occupation: "", catchPhrase: "" },
  ]);
});