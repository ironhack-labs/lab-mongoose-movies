const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose
  .connect("mongodb://localhost/starter-code", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const data = [
  {
    name: "Toni Sanchez",
    occupation: "Dev student",
    catchPhrase: "Cada loco con su meta",
  },
  {
    name: "Unknown",
    occupation: "Hacker",
    catchPhrase: "01001000 01101111 01101100 01100001",
  },
  {
    name: "Hasma Amigo",
    occupation: "none",
    catchPhrase: "مرحبا يا صديقي",
  },
];

Celebrity.create(data);
