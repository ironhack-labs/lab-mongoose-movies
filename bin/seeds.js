const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const connectDB = require("../db/index");

const celebrities = [
  {name: Jimmy Iron, occupation: Actor, catchPhrase: "This is made by Iron!" }, 
  {name: Lara Hack, occupation: Singer, catchPhrase: "What a hack!" }, 
  {name: Iron Bard, occupation: Singer, catchPhrase: "Coooooool." }, 
]

connectDB()
  .then(() => {
    Celebrity.deleteMany().then(() => {
      Celebrity.create(celebrities)
        .then((drone) => {
          console.log(`Created ${celebrities.length} Celebrities.`);
          mongoose.connection.close();
        })
        .catch((err) => {
          console.log("Error occured while inserting the celebrities", err);
        });
    });
  })
  .catch((err) => {
    console.log("Error occured while inserting the celebrities", err);
  });