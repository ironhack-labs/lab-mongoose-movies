const mongoose = require("mongoose");
const Celebrity = require("../Models/celebrity.js");
const DB_NAME = "starter-code";
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebInitialValues = [
  {
    name: "Michael Jordan",
    occupation: "Basketball player",
    catchPhrase: "I believe I can fligh",
  },
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "Alcohol is super fun",
  },
  {
    name: "Mike Tyson",
    occupation: "Ex Pro Boxer",
    catchPhrase: "Everybody has a plan until I give the first punch",
  },
];

//Call the Celebrity model's create method with the array as argument.

Celebrity.create(celebInitialValues)
  .then((dbCelebrity) => {
    console.log(`Created ${dbCelebrity.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while creating celebrities in the DB: ${err}`
    )
  );

//Run the seed file with node to seed your database.
//Check the database with the mongo command to confirm that your data was saved.
