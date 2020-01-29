const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity.js");

withDbConnection(async () => {
  await dropIfExists(celebrity);
  await celebrity.create([
    { taName: "Diego", taFrase: "Reutiliza las funciones" },
    { taName: "Alejandro", taFrase: "La clave privada no se comparte" },
    { taName: "Giorgio", taFrase: "Maaa quee cooosa!" },
    { taName: "Simon", taFrase: "Voostrap Mola" },
    { taName: "Marc", taFrase: "Undefined JODERRR LAS PUTAS FUNCIONES " }
  ]);
});