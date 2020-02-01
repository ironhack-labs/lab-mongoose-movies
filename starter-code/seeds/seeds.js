// Unos datos desde lo que partimos....

const withDbConnection = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await celebrity.deleteMany();
  await celebrity.create([
    { name: "Manuel", ocuppation: "Actor", catchPhrase: "Ey, baby!" },
    { name: "Pedro", ocuppation: "Cantante", catchPhrase: "Mamma mía!" },
    { name: "Ivan", ocuppation: "Rockero", catchPhrase: "Welcome to hell" }
  ]);
});
