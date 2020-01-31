const withDbConnection = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await celebrity.collection.drop();
  await celebrity.create([
    { name: "Chiquito", occupation: "humorista", catchPhrase: "Fistro pecadorr" },
    { name: "Iker Jimenez", occupation: "presentador", catchPhrase: "Bienvenido a la nave del misterio" },
    { name: "Andres Montes", occupation: "narrador", catchPhrase: "Ratatatatata" },
  ]);
});