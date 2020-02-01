
const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/celebrity");




withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await Celebrity.create([
    { name: "Tom Cruise", occupation: "Actor", catchPhrase: "Mission Impossible" },
    { name: "Johnny Cash", occupation: "Singer", catchPhrase: "I walk the line" },
    { name: "Michael Phelps", occupation: "Swimmer", catchPhrase: "Just do it" }

  ]);
});