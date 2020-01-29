const withDbConnection = require('../withDbConnection');
const Celebrity = require('../models/celebrity.js');


withDbConnection (async () => {
  await Celebrity.deleteMany();
  await Celebrity.create ( [
    { name: "Diego", occupation: "Profe", catchPhrase:"Reutiliza las funciones" },
    { name: "Test", occupation: "test", catchPhrase:"test" },
    { name: "Test", occupation: "test", catchPhrase:"test" }
  ])
});


