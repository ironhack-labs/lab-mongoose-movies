const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose')

const seeds = [
  {
    name: "Homestar Runner",
    occupation: "terrific athlete",
    catchphrase: "\"That's bupkis!\""
  },
  {
    name: "Strong Bad",
    occupation: "layabout",
    catchphrase: "\"Everybody to the limit!\""
  },
  {
    name: "Bubs",
    occupation: "concessionaire",
    catchphrase: "\"It's a niche market!\""
  }
];

/*
mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    // ITERATION ONE: SEED CELEBRITIES (seedlebrities)
    Celebrity.create(seeds)
      .then((data) => {
        console.log("Seedlebrities added!", data);
      })
      .catch((err) => {
        console.log("Failed to add seedlebrities", err);
      })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
*/
module.exports = seeds;
