const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebs = [
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "Get a bigger smile on my face being alone",
  },
  {
    name: "John Lennon",
    occupation: "Singer",
    catchPhrase: "Reality leaves a lot to the imagination",
  },
  {
    name: "Quentin Tarantino",
    occupation: "Director",
    catchPhrase: "No! Nobody brought an extra bag!",
  },
];

mongoose
  .connect("mongodb://localhost/lab-movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    Celebrity.insertMany(celebs)
      .then((insertedCelebs) => {
        console.log(`Inserted ${insertedCelebs.length} celebs!!!`);
        mongoose.connection.close();
      })
      .catch((error) => console.log(error));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
