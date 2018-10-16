const celebrities = [
  {
    name: "Donald Duck",
    occupation:"Farmer",
    catchPhrase: "Oh boy oh boy oh boy!"
  },
  {
    name: "Sheldon Cooper",
    occupation: "Physicist",
    catchPhrase: "Bazinga!"
  },
  {
    name:"Bilbo Baggins",
    occupation: "Adventurer",
    catchPhrase: "“Sorry! I don’t want any adventures, thank you. Not Today. Good morning! But please come to tea – any time you like! Why not tomorrow? Good bye!”"
  }
]

const Celebrity = require("../models/celebrity");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/celebrityApp')
  .then(() => {
    console.log("feeding from seeds")
  }).catch((error) => {
    console.log(error)
  });


Celebrity.insertMany(celebrities)
  .then((result) => {
    console.log("celebrity added to db");
    console.log(result)
  }).catch((error) => {
    console.log(error)
  });
