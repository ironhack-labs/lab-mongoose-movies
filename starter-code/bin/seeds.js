const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");


mongoose
  .connect('mongodb://localhost/movies', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [
  {
    name: "Jim Carrey",
    occupation: "actor",
    catchPhrase: "SSSSSSSSSSSSSSSSMOKIN'!"
  },
  {
    name: "Robin Williams",
    occupation: "actor",
    catchPhrase: "O Captain, my Captain"
  },
  {
    name: "El Chavo del 8",
    occupation: "comedian",
    catchPhrase: "Bueno, pero no te enojes"
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log("Celebrities added!!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(`There has been an error: ${error}`);
  });
