const mongoose = require("mongoose");
//const {dbURL} = require('../config');
const Product = require("../models/Celebrity");

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const celebrities = [
  {
    name: "Paquita Salas",
    occupation: "representante de actores",
    catchPhrase: "En PS Management buscamos a la actriz 360"
  },
  {
    name: "Paquita Salas 2",
    occupation: "representante de actores",
    catchPhrase: "En PS Management buscamos a la actriz 360"
  },
  {
    name: "Paquita Salas 3",
    occupation: "representante de actores",
    catchPhrase: "En PS Management buscamos a la actriz 360"
  }
];

Celebrity.collection.drop();

celebrities.forEach(p => {
  let pr = new Celebrity(p);
  pr.save((err, prod) => {
    if (err) {
      throw err;
    }
  });
});
