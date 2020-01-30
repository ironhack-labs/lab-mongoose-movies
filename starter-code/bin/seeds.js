// Databse connection
require('./../conf/dbconnect');

const Celebrity = require('./../models/Celebrity.js');

const data = [
  {
    name : "Harrison Ford",
    occupation : "Actor",
    catchPhrase : "I have a bad feeling about this..."
  },
  {
    name : "Buzz Lightyear",
    occupation : "Toy",
    catchPhrase : "To infinity and beyond !"
  },
  {
    name : "Douglas Crockford",
    occupation : "Guru",
    catchPhrase : "I dont blink, i lubricate my eyes asynchronously."
  }
]

Celebrity.insertMany(data)
  .then(success => {
    console.log("SEEDED DB SUCCESSFULLY !");
  })
  .catch(error => {
    console.log("ERROR WHILE SEEDING THE DB !")
  })
