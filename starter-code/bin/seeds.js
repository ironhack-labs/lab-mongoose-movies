const mongoose = require("mongoose");
 const Celebrity = require("../models/Celebrity.model");

 require('..//db.config');

 const celebrities = [
    {name: 'Agus', 
    occupation:'Lead teacher', 
    catchPhrase: "Don't worry guys"
    },
    {name: 'Val', 
    occupation:'TA', 
    catchPhrase: "Hello my babiesss"
    },
    {name: 'André', 
    occupation:'TA', 
    catchPhrase: "Unshieting yourself"}
    ];

 Celebrity.create(celebrities)
  .then(dbCelebrities => {
    console.log(`Created ${dbCelebrities.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating celebrities in the DB: ${err}`)
  );