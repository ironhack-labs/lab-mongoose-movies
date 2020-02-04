const celebs = [
  {
    Name: "Tom Cat",
    Occupation: "Housecat",
    Catchphrase: "I hate Jerry"
  },
  {
    Name: "Jerry Mouse",
    Occupation: "Housemouse",
    Catchphrase: "I hate Tom"
  },
  {
    Name: "Donald Duck",
    Occupation: "Duck",
    Catchphrase: "I hate everything"
  }
];

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/celebrity-project", () => {
  console.log("Connected to DB");
});

const Celeb = require("../models/Celebrity");

Celeb.collection.drop();

Celeb.create(celebs)
  .then(result => {
    console.log(`Created ${result.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
