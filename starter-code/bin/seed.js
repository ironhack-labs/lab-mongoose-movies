const mongoose = require("mongoose");
const Celebrity = require("./../models/Celebrity");
const dbName = "celebrityDB";

celebrities = [
    {
        name: "Celebrity1",
        occupation: "Occupation1",
        catchphrase: "Catchphrase1"
    },
    {
        name: "Celebrity2",
        occupation: "Occupation2",
        catchphrase:"Catchphrase2"
    },
    {
        name: "Celebrity3",
        occupation: "Occupation3",
        catchphrase:"Catchphrase3"
    }
];

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const pr = Celebrity.create(celebrities);
    return pr; 
  })
  .then(createdCelebrities => {
    console.log(`Created ${createdCelebrities.length} celebrities`);
    const pr = mongoose.connection.close();
    return pr;
  })
  .then(() => console.log("Connection closed!"))
  .catch(err => console.error("Error connecting to mongo", err));