const mongoose = require("mongoose");
const Celebrity = require("./../models/Celebrity");
const dbName = "celebrity";

celebrities = [
  {
    name: "David Ortiz",
    occupation: "Baseball player",
    catchPhrase: "I will get to the bottom of this"
  },
  {
    name: "Aaron Boone",
    occupation: "Baseball manager",
    catchPhrase: "My guys are savages in the box!"
  },
  {
    name: "Rob Manfred",
    occupation: "MLB Commisioner",
    catchPhrase: "Derp Derp, pace of play"
  }
];

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => Celebrity.create(celebrities))
  .then(createdCelebrities =>
    console.log(`Created ${createdCelebrities.length} documents`)
  )
  .then(() => mongoose.connection.close())
  .then(() => console.log("Connection closed!"))
  .catch(err => console.log(err));
