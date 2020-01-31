const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/celebrity");

withDbConnection(async () => {
  //await dropIfExists(celebrities);
  await Celebrity.deleteMany();
  await Celebrity.create([
    { name: "Bart Simpson", occupation: "Niño", catchPhrase: "Multiplicate por cero" },
    { name: "Homer Simpson", occupation: "Padre", catchPhrase: "Bart! D'oh!" },
    { name: "Joan Carballo", occupation: "Super heroe", catchPhrase: "Amos no me jodas ¿como que no funciona?" },
  ]);
});