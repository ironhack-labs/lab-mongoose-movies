require("dotenv").config();
const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity');

const celebrities = [{
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Show me the money!"
  },
  {
    name: "Donald Trump",
    occupation: "President",
    catchPhrase: "Make America Great Again"
  },
  {
    name: "Pablo Picasso",
    occupation: "Artist",
    catchPhrase: "Everything you can imagine is real"
  }
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
    Celebrities.create(celebrities)
      .then((celebrities) => {
        celebrities.forEach((celebrity) => {
          console.log(celebrity.name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(`Error occured while connecting to the Database ${err}`);
  });