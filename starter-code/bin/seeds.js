const mongoose = require("mongoose");
const NewCelebrity = require("../models/celebrity");

mongoose.connect(`mongodb://localhost/celebritiesDB`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Ayanda Thabethe",
    occupation: "tv presenter",
    catchPhrase: "You can't be sad in pink",
  },
  {
    name: "Tracee Ellis Ross",
    occupation: "actress",
    catchPhrase: "The Boss on Ross",
  },
  {
    name: "Eden Alene",
    occupation: "singer",
    catchPhrase: "Now it's complete",
  },
];

NewCelebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while getting celebrities from the DB: ${err}`
    )
  );
