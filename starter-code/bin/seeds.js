require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect(process.env.DB)
.then(() => {
  console.log("connect to mongoose");
})
.then(() => {
  return Celebrity.insertMany([
    {
      name: "Isabella",
      occupation:"Scort",
      catchPhrase: "Qué paso en el baño?"
    },
    {
      name: "Hassan",
      occupation:"Taxi driver",
      catchPhrase: "Lo importante es la cantidad"
    },
    {
      name: "Pepe",
      occupation:"Sex-symbol",
      catchPhrase: "Hola bebé"
    }
  ])
})
.then(celebs => {
  console.log(celebs);
  mongoose.connection.close();
})