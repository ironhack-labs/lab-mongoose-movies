const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movies = require("../models/Movies.model");
const arg = process.argv[2];

// console.log(arg);

let celebritySeed = [
  {
    name: "Peter Griffin",
    occupation: "Factory Worker",
    catchprase: "Annoying Laugh",
  },
  { name: "Kenny", occupation: "Student", catchprase: "*mumbled*" },
  { name: "Rick", occupation: "Mad Scientist", catchprase: "Pickle Rick!" },
];

let moviesSeed = [
  { title: "Die Hard 1", genre: "", plot: "" },
  { title: "Die Hard 2", genre: "", plot: "" },
  { title: "Die Hard 3", genre: "", plot: "" },
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}", seeding database now!`
    );
    seed();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

function seed() {
  if (arg == "Celebrity") {
    Celebrity.insertMany(celebritySeed)
      .then((result) => {
        console.log("Celebrity collection seeded!");
        closeConnection();
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (arg == "Movies") {
    Movies.insertMany(moviesSeed)
      .then((result) => {
        console.log("Movies collection seeded!");
        closeConnection();
      })
      .catch((err) => {
        console.log(err);
      });
    // } else if (arg == "Drop") {
    //   Celebrity.connection
    //     .drop()
    //     .then(() => {
    //       console.log("Celebrities Collection Dropped!");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   Movies.connection
    //     .drop()
    //     .then(() => {
    //       console.log("Movies Collection Dropped!");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    function closeConnection() {
      mongoose.connection
        .close()
        .then((result) => {
          console.log("Connection closed successfully!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
