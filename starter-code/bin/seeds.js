const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrities");
const Movies = require("../models/Movies");
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
  }
];
var newMovies = [
  {
    title: `${faker.random.word()} ${faker.commerce.productAdjective()}`,
    genre: "Accion",
    plot: faker.lorem.sentences(2)
  },
  {
    title: `${faker.name.firstName()} ${faker.name.lastName()}`,
    genre: "Western",
    plot: faker.lorem.sentences(2)
  },
  {
    title: `${faker.name.firstName()} ${faker.name.lastName()}`,
    genre: "Romantic",
    plot: faker.lorem.sentences(2)
  }
];

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
      Celebrities.create(newCelebrities).then(addedCelebs => {
        Movies.deleteMany()
    .then(deleted => {
      Movies.create(newMovies).then(addedMovies => {
        process.exit(0);
      });
    })
    .catch(error => {
      console.log(error);
    });
      });
    })
    .catch(error => {
      console.log(error);
    });
}
