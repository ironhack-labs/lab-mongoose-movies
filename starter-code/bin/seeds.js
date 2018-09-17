const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

let dataSeeds = [
  {
    name: "Tom Cruise",
    occupation: "Action movies actor",
    catchPhrase: "TopGun ha sido mi mejor actuación"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "cantar es mi destino"
  },
  {
    name: "Kim Kardashian",
    occupation: "hija de alguien con mucha pasta",
    catchPhrase: "vive de tus padres hasta que puedas vivir de tus hijos"
  }
];

mongoose
  .connect(
    'mongodb://localhost/celebrity-database',
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(`connected to Mongo! DB name: "${x.connections[0].name}"`);
  })
  .then(() => Celebrity.collection.drop())
  .then(() => Celebrity.insertMany(dataSeeds))
  .catch(err => {
    console.log(`Errro connecting to mongo`, err);
  });

