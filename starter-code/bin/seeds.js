require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities = [
  {
    name : "Kim Kardashian",
    occupation: "Business woman",
    catchPhrase: "I'm totally not against plastic surgery."
  },
  {
    name : "Kendall Jenner",
    occupation: "Model",
    catchPhrase: "Someone who wants to be with you, WILL be with you. End of story."
  },
  {
    name : "Khloé Kardashian",
    occupation: "Media personality, socialite, and model.",
    catchPhrase: "Ever since Kim called me a troll, I love using that word."
  }
];


  //db connection without callback
  mongoose
  .connect("mongodb://localhost/movies", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);  
    Celebrity.deleteMany()
    .then(() => {
      return Celebrity.insertMany(celebrities);
    })
    .then(() => {
      console.log("succesfully added all the data");
      mongoose.connection.close();
      process.exit(0);
    });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  }); 


/*
Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
Call the Celebrity model's create method with the array as argument.
In the create method's callback, display feedback.
*/