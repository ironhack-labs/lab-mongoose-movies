require("../app");
let CelebModel = require("../models/celeb.model");
let mongoose = require("mongoose");

let celebArr = [
  {
    name: "Manish",
    occupation: "Teacher",
    catchPhrase: "Whats my age?",
  },
  {
    name: "Jorge",
    occupation: "Teacher-assistant",
    catchPhrase: "The lab for today is easy",
  },
  {
    name: "Ross",
    occupation: "Alcoholic",
    catchPhrase: "What the fuck have I done?",
  },
];

CelebModel.insertMany(celebArr)
  .then((res) => {
    console.log(res);
    console.log("Data seeded in Celebmodel insert many");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error in CelebModel insertMany ", err);
  });
