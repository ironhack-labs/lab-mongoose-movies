const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect(`mongodb://localhost/starter-code`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

celebrities = [
  {
    name: "Andre",
    ocupation: "Teacher",
    catchPhrase: "Good morning beautiful people",
  },
  {
    name: "Filipe",
    ocupation: "TA",
    catchPhrase: "Lets see",
  },
  {
    name: "Francisco",
    ocupation: "Student",
    catchPhrase: "Fucking hell",
  },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while creating celebrities in the DB: ${err}`
    )
  );
