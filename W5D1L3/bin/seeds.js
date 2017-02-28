const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/W5D1L3');
const Celebrity = require('../models/celebrity.js');

const seedData = [
  {
    name: "Actor 1",
    occumation: "actor",
    catchPhrase: "That's not my catch phrase."
  },
  {
    name: "Actor 2",
    occumation: "waiter, actor, dancer",
    catchPhrase: "Always a better pick than Actor 1."
  },
  {
    name: "Actor 3",
    occumation: "actor",
    catchPhrase: "No."
  }
];

Celebrity.create(seedData, (err, items) => {
  // if (err) {
  //   throw err;
  //   return;
  // }
  item.forEach((item) => {
    console.log(`Writing to database... again... ${item}`);
  });
  mongoose.disconnect();
});
