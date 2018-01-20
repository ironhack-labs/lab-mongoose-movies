const mongoose = require('mongoose');

require('../config/db.config');

const Celebrity = require('../models/celebrity.model');

const products = [
  {
    name: 'Liam neelson',
    occupation: "actor",
    catchPhrase: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
  },
  {
    name: 'Arnold',
    occupation: "actor",
    catchPhrase: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
  },
  {
    name: 'Van damme',
    occupation: "actor",
    catchPhrase: 'You never have to leave your computer! All you can eat nutrition!',
  }
];

Celebrity.create(products).then((docs) => {
  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });

  mongoose.connection.close();
});
