const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Sean Connery",
    occupation: "Actor",
    catchphrase: "Martini, shaken, not stirred"
  },
  {
    name: "Daniel Craig",
    occupation: "Currently James Bond",
    catchphrase: "Yes, moneypenny"
  },
  {
    name: "Chris Martin",
    occupation: "Musician",
    catchphrase: "Para, para, paradise"
  }
];

Celebrity.create(celebrities, (err) => {
  if(err) { throw(err) }
  console.log(`Created ${celebrities.length} movies`);
  mongoose.connection.close();
});