const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/celebrity");

withDbConnection(async () => {
  //await dropIfExists(celebrities);
  await Celebrity.deleteMany();
  await Celebrity.create([
    { name: "Bart Simpson", ocuppation: "Niño", catchPhrase: "Multiplicate por cero" },
    { name: "Homer Simpson", ocuppation: "Padre", catchPhrase: "Bart! D'oh!" },
    { name: "Joan Carballo", ocuppation: "Super héroe", catchPhrase: "Amos no me jodas ¿como que no funciona?" },
  ]);
});