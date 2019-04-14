console.log("Seeding the database");

const mongoose = require('mongoose');
const Celebrity = require("../models/celebrity");
const dbName = "mongoose-movies";

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })
.then(x => {
  console.log(
    `Connected to Mongo! Database name: "${x.connections[0].name}"`
  );
})
.catch(err => {
  console.error("Error connecting to mongo", err);
});

const celebrityData = [
  {
    name: "Snoop Dogg",
    occupation: "Singer",
    catchPhrase: "Fo shizzle"
  },
  {
    name: "Arnold Schwartzenegger",
    occupation: "Actor",
    catchPhrase: "Hasta la vista, baby"
  },
  {
    name: "Snoop Dogg",
    occupation: "Singer",
    catchPhrase: "Fo shizzle"
  }
];

Celebrity.create(celebrityData)
.then(celebrities => {
  console.log(`Inserted ${celebrities.length} celebrities`);
  mongoose.connection.close();
  console.log("Database connection closed. Exiting...")
  process.exit(0);
})
.catch();
