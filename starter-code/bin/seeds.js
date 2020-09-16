const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const celebrities = [
    {
        name: "Ben Affleck",
        occupation: "Movie Star",
        catchPhrase: "You're basically the sum of all the experiences you've ever had, and they're sort of shaken up in you and reproduced in the things you create, and that includes seeing movies."
    },
    {
        name: "Penelope Cruz",
        occupation: "Actress",
        catchPhrase: "The most difficult thing in the world is to start a career known only for your looks, and then to try to become a serious actress. No one will take you seriously once you are known as the pretty woman."
    },
    {
        name: "Madonna",
        occupation: "Singer",
        catchPhrase: "A lot of people are afraid to say what they want. That’s why they don’t get what they want."
    }
];

mongoose
  .connect("mongodb://localhost/mongoose-movies", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    try {
        const result = await Celebrity.insertMany(celebrities);
        console.log(`Seeded the database with ${result.length} celebrities!`);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    })
    .catch((err) => console.error("Error connecting to mongo", err));