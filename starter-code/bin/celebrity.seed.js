require("../config/db.config");

const CelebrityModel = require("../models/celebrity.model");
const mongoose = require("mongoose");

let celebArray = [
  { name: "Tom Cruise", occupation: "actor", catchPhrase: "Your mission, should you choose to accept it" },
  { name: "Beyonce", occupation: "singer", catchPhrase: "Power means happiness; power means hard work and sacrifice." },
  { name: "Daffy Duck", occupation: "duck", catchPhrase: "I'm not crazy, I just don't give a darn! WOO HOO! WOO HOO!" }
];

CelebrityModel.insertMany(celebArray)
  .then(() => {
    console.log("Data Added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });