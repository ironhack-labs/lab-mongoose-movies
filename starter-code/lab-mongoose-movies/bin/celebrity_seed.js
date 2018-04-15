require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const dbURL = "mongodb://localhost/lab-mongoose-movies";

const celebrity_data = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Scientology is the best"


  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "I am single"
  },
  {
    name: "Victor Rodriguez",
    occupation: "TA",
    catchPhrase: "This worked in repl.it"
  }
];

let db = mongoose.connect(dbURL).then(() =>{
  Celebrity.collection.drop();
  console.log(`Connected to db ${dbURL}`);

  Celebrity.create(celebrity_data)
  .then((celebrities)=> {
    console.log(celebrities);
    mongoose.disconnect();

  })
  .catch((err) => {
    console.log(err)
  })

});
