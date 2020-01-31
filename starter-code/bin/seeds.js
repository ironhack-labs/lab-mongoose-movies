const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await dropIfExists(celebrity);
  await celebrity.create([
    {
      name: "Tom Cruise",
      occupation: "actor",
      catchPhrase: "Show me the money"
    },
    { name: "Beyonce", occupation: "singer", catchPhrase: "Single lady" },
    { name: "Daffy Duck", occupation: "comedian", catchPhrase: "cuac cuac" }
  ]);
});
