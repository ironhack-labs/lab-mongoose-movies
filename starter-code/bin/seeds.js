let Celebrity = require("../models/celebrity")
let mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/celebrities")
  .then(console.log("works!"))
  .catch((err) => console.log("marche pas :" + err))

let data = [
  {
    name: "Machin",
    occupation: "Actor",
    catchPhrase: "I am an actor !"
  },
  {
    name: "Truc",
    occupation: "Actress",
    catchPhrase: "I am an actress !"
  },
  {
    name: "Globor",
    occupation: "Destroyer of worlds",
    catchPhrase: "I am Globor, destroyer of worlds"
  }
]

console.log(data)


Celebrity.create(data, function (err, celebrity) {
  
  if (err) console.log(err)

  
  // ...
});



