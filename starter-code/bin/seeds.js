//Data base is empty. Import data through a seeds.js file that's inside a bin folder

//! Calls mongoose
const mongoose = require("mongoose");
//! Imports the Celebrity model
const Celebrity = require("../models/Celebrity.model");

//! Names the data base
const dbtitle = "celebrities-project";
//! Connects to the database
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true });

////Celebrity.collection.drop();

//!Create data entries based on the model
const celebrities = [
  {
    name: "Ian McKellen",
    occupation: "Actor and white wizard",
    catchphrase: "You mustn't upstage the bride"
  },

  {
    name: "Nicholas Cage",
    occupation: "Actor and meme lord",
    catchphrase: "There's a fine line between the Method actor and the schizophrenic"
  },

  {
    name: "Patrick Stewart",
    occupation: "Actor and ship commander",
    catchphrase: "It's possible to commit no mistakes and still lose. That's not weakness, that's life"
  }
];

//!Creates data in database
Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

//Type the $ node bin/seeds.js command in the console. It connects to the database and creates a new celebrities collection based on our celebrity model and then closes the connection to the database.
