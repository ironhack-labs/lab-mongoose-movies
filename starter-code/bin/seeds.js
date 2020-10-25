// Iteration #1 - The celebrity model

// This is to create the celebrities collection in mongoDb with initial info.
// See important info at the bottom.

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity'); //schema with the collection

const dbName = 'movies-project'; //creates de Db with collection celebrities and docs within
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrities = [
  {
    name: "Sean Connery",
    occupation: "Actor",
    catchPhrase: "For some the best James Bond of all times!"
  },
  {
    name: "Rafa Nadal",
    occupation: "Tennis player",
    catchPhrase: "Best on Rolland Garros ever!"
  },
  {
    name: "Leo Messi",
    occupation: "Football player",
    catchPhrase: "Best for an era!"
  },
  {
    name: "Steve Jobs",
    occupation: "Others",
    catchPhrase: "Best business man of last century!"
  },
  {
    name: "Andreu Martínez",
    occupation: "IT",
    catchPhrase: "Where did you take him? From the same hell!!!"
  }  
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});

// By executing from the terminal from the root directory of the project the command:
// $ node bin/seeds.js we are creating the library-project DB with books collection 
// with 5 celebrities.