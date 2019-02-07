// connect env
require("dotenv").config();

// connect mongoose
const mongoose = require("mongoose");

// connect mongo
mongoose
  .connect("mongodb://localhost/celebs", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// take Celebrity
const Celebrity = require("../models/Celebrity.js");

// access seed data
const initialData = [
  {
    name: "Jay-Z",
    occupation: "Mogul",
    catchPhrase: "I'm not a businessman, I'm as business, man!"
  },
  {
    name: "Randy Moss",
    occupation: "Wide Receiver",
    catchPhrase: "Straight Cash Homie"
  },
  {
    name: "Derek Zoolander",
    occupation: "Male Model",
    catchPhrase: "Really really. Really. Ridiculously good-looking."
  }
];

// seed the database
Celebrity.create(initialData)
  .then(celebs => {
    console.log(`${celebs.length} celebs IN!`);
  })
  .catch(err => {
    console.log("🚨 SEEDING ERROR 🚨");
  });
