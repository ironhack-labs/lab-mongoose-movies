const withDbConnection = require("../withDbConnection");
const Celebrity = require("../models/celebrity");

// withDbConnection(async () => {
//   await CelebrityFraseTa.collection.drop();
//   await Celebrity.create([
//     { name: "Tom Cruise", occupation: "Actor", catchPhrase: "Mission Impossible" },
//     { name: "Johnny Cash", occupation: "Singer", catchPhrase: "I walk the line" },

//     { ame: "Michael Phelps", occupation: "Swimmer", catchPhrase: "Just do it" }
//   ]);
// });


withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await FraseTa.create([
    { name: "Tom Cruise", occupation: "Actor", catchPhrase: "Mission Impossible" },
    { name: "Johnny Cash", occupation: "Singer", catchPhrase: "I walk the line" },
    { name: "Michael Phelps", occupation: "Swimmer", catchPhrase: "Just do it" }

  ]);
});