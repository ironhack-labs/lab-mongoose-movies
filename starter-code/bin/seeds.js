require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

// seed DATA
const seed = [
  {
    name: "Freddy Mercury",
    occupation: "rock star",
    catchPhrase: "Sometimes the human condition requires some anaesthesia",
  },
  {
    name: "Lady Gaga",
    occupation: "pop star",
    catchPhrase: "I was born this way!",
  },
  {
    name: "Luciano Pavarotti",
    occupation: "opera star",
    catchPhrase: "Music is my life",
  },
];

// MONGOOSE CONNECTION
// 1. CONNECT TO DB

const dbRestart = function () {
  mongoose
    .connect(`mongodb://localhost/starter-code`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((x) => {
      // 2. DROP THE DATABASE TO CLEAR IT
      console.log("Connected to the DB");
      const pr = x.connection.dropDatabase();
      return pr;
    })
    .then(() => {
      // INSERT THE DATA TO DB (RUN THE SEED)
      // 3. CREATE THE BOOK DOCUMENTS
      const pr = Celebrity.create(seed);
      return pr;
    })
    .then((createdCelebrities) => {
      console.log(`Created ${createdCelebrities.length} celebrities.`);
      mongoose.connection.close();
    })
    .catch((err) => console.log("Error connection to the DB", err));
};

dbRestart();

module.exports = seed;
