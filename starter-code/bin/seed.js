require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

//const dbName = process.env.DBURL;

mongoose.connect("mongodb://localhost/celebrities", {useMongoClient: true});

const celebrities = [
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "The first rule of Fight Club is: you do not talk about Fight Club. The second rule of Fight Club is: you do not talk about Fight Club!"
  },
  {
    name: "Robert deNiro",
    occupation: "Actor",
    catchPhrase: "Are you talkin' to me?"
  },
  {
    name: "Sting",
    occupation: "Singer",
    catchPhrase: "If you love somebody, set them free"
  },
  {
    Name: "Kurt Cobain",
    occupation: "Singer",
    catchPhrase: "It's better to burn than to fade out"
  }
];
Celebrity.collection.drop();

Celebrity.create(celebrities, (err, data) => {
  if (err) {throw (err)}
  console.log("Data created!!!!");
  mongoose.disconnect();
});
