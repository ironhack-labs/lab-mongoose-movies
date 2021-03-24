const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

let seedInfo = [
  {
    name: "Peter Griffin",
    occupation: "Factory Worker",
    catchprase: "Annoying Laugh",
  },
  { name: "Kenny", occupation: "Student", catchprase: "*mumbled*" },
  { name: "Rick", occupation: "Mad Scientist", catchprase: "Pickle Rick!" },
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}", seeding database now!`
    );
    seed(seedInfo);
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

function seed(seedInfo) {
  Celebrity.insertMany(seedInfo)
    .then((result) => {
      console.log("Collection seeded!", result);
    })
    .catch((err) => {
      console.log(err);
    });

  mongoose.connection
    .close()
    .then((result) => {
      console.log("Connection closed successfully!", result);
    })
    .catch((err) => {
      console.log(err);
    });
}
