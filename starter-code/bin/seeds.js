const celebrities = [
  {
    name: "Beyonce",
    occupation: "singer",
    catchphrase: "Put a ring on it"
  },
  {
    name: "Jay-Z",
    occupation: "rapper",
    catchphrase: "I got 99 problems"
  },
  {
    name: "Alfonso",
    occupation: "TA",
    catchphrase: "All good in the hood"
  }
];

let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/celebrity-lab", () => {
  console.log("connected");
});

let Celebrity = require("../models/Celebrity");

Celebrity.collection.drop();

Celebrity.create(celebrities)
  .then(res => {
    console.log("created");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
