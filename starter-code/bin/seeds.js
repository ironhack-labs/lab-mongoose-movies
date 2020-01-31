const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
    //await dropIfExists(celebrity);
    await celebrity.deleteMany();
    await celebrity.create([
      { name: "Rafa Nadal", occupation: "Tennis Player", catchPhrase: "Vamos RAFA!" },
      { name: "Cristiano Ronaldo", occupation: "Soccer Player", catchPhrase: "Siiiiuuuuh" },
      { name: "Andres Montes", occupation: "Sport Journalist", catchPhrase: "La vida puede ser maravillosa" }
    ]);
  });