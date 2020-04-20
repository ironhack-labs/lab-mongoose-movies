const celebrities = [
  {
    name: "David Hasselhoff",
    occupation: "Preacher of Love",
    catchPhrase: "Just looking for freedom",
  },
  {
    name: "Borat Sagdiyev",
    occupation: "Journalist",
    catchPhrase: "Make Benefit Glorious Nation of Kazakhstan",
  },
  {
    name: "Chuck Norris",
    occupation: "Texas Ranger",
    catchPhrase: "Cannot fly, but does it anyway",
  },
];

// see also Express Cinema Lab, here using .create() instead of insertMany()
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity"); // celebrity.js

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to MongoDB from seeds.js! Database name: "${x.connections[0].name}"`
    );

    Celebrity.create(celebrities, (error, celebrity) => {
      if (error) {
        return handleError(error);
      }
      console.log("Celebrities created: ", celebrity);
      x.connections[0].close();
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
