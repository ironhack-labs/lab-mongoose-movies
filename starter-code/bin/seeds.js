const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrities");
const faker = require("faker");

var newCelebrities = [
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    occupation: "Actor",
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    occupation: "Singer",
    catchPhrase: faker.company.catchPhrase()
  },
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    occupation: "Comedian",
    catchPhrase: faker.company.catchPhrase()
  },
]
mongoose
  .connect("mongodb://localhost/Ironhack0819", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  Celebrities.deleteMany()
    .then(deleted => {
      Celebrities.create(newCelebrities)
       .then(addedCelebs => {
            process.exit(0);
          });
        })
        .catch(error => {
          console.log(error);
        });
    };
