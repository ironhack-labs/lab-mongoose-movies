// Iteration #1
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
//mongoose.connect("mongodb://localhost/drones-dev");

const celebrityData = [
  {
    name: "Captain Archibald Haddock",
    occupation: "Seafaring pipe-smoking Merchant Marine Captain",
    catchPhrase: "Moule à gaufres, bachi-bouzouk, phlébotome, logarithme!"
  },
  {
    name: "Godefroy de Montmirail ",
    occupation: " Count of Montmirail, d'Apremont et de Papincourt,",
    catchPhrase: "Que trépasse si je fayblis"
  },
  {
    name: "Old Lodge Skins",
    occupation: "Indian Chief",
    catchPhrase:
      "Avance et viens te battre ! C'est un bon jour pour mourir ! Merci de m'avoir fait un Être humain ! Merci de m'avoir aidé à devenir un guerrier ! Merci pour mes victoires et pour mes défaites ! "
  }
];

celebrityData.forEach(celebrityObject => {
  mongoose.connect("mongodb://localhost/celebrities-dev");

  Celebrity.create(celebrityObject, (err, celebrity) => {
    if (err) {
      throw err;
    }
    console.log(celebrity.name);

    // mongoose.connection.close();
  });
});

setTimeout(() => {
  mongoose.connection.close();
});
