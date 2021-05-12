const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

require("../db");

const seedCelebs = [
    {
        name: "Dale Cooper",
        occupation: "Special agent",
        catchPhrase: "This must be where pies go when they die."
    },
    {
        name: "Audrey Horne",
        occupation: "Salon owner",
        catchPhrase: "You know, sometimes I get so flushed, it's interesting. Do your palms ever itch?"
    },
    {
        name: "Log Lady",
        occupation: "Ballroom dancing teacher",
        catchPhrase: "One day my log will have something to say about this. My log saw something that night."
    }
];

Celebrity.create(seedCelebs)
  .then(dbCelebs => {
    console.log(`Created ${dbCelebs.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating fake users in the DB: ${err}`));