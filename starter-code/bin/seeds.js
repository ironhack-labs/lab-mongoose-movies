const celebrityModel = require("../models/Celebrity");
const mongoose = require("mongoose");
const celebritys = [
    {
        name: "Ladj Ly",
        occupation: "director",
        catchPhrase: "Mes amis, retenez ceci. Il n'y a ni mauvaises herbes ni mauvais hommes. Il n'y a que de mauvais cultivateurs."
    },
    {
        name: "Booba",
        occupation: "singer",
        catchPhrase: "Chez nous y a pas l’OTAN, alors si y a la guerre ça va durer longtemps "
    },
    {
        name: "Omar Sy",
        occupation: "Actor",
        catchPhrase:"J'ai décidé d'être heureux parce que c'est bon pour la santé." 
    },

]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    celebrityModel
        .insertMany(celebritys)
        .then(dbRes => {
          console.log("celebritys created");
        })
        .catch(err => {
          console.log("there was an error creating the celebrity");
        });
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });