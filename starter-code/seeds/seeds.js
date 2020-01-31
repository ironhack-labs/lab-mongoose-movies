const withDbConnection = require('../withDbConnection');
const Celebrity = require('../models/celebrity.js');

//Con esta función hacemos que se impriman estos datos en la base de datos
withDbConnection (async () => {
  await Celebrity.deleteMany();
  await Celebrity.create ( [
    { name: "Steve Jobs", occupation: "Developer", catchPhrase:"Connecting the dots" },
    { name: "Harry Potter", occupation: "Hogwart's Student", catchPhrase:"Expelliarmus" },
    { name: "Marc", occupation: "Teacher", catchPhrase:"Ya lo iréis pillando" }
  ])
});


