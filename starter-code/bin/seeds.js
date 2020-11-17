const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return x.connection.dropDatabase();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const celebrities = [
  {
    name: "Walter Mercado",
    occupation: "Tv presenter",
    catchPhrase: "Mucho, mucho amor",
  },
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "bla bla",
  },
];

Celebrity.insertMany(celebrities)
  .then((celebrityfromDB) => {
    console.log("celebrity", celebrityfromDB);
    mongoose.connection.close();
  })
  .catch((error) => `Error while creating a new celebrity: ${error}`);
