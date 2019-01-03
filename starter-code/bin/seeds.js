const mongoose = require("mongoose"); // have to require mongoose otherwise line 5 wont work
const Celebrity = require("../models/Celebrity"); //same here...

const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Scientologist",
    catchPhrase: "Reach for the stars"
  },
  {
    name: "Beyonce",
    occupation: "Queen B",
    catchPhrase: "Who runs the world?? Grrrlz"
  },
  {
    name: "Duffy Duck",
    occupation: "Feathery Friend",
    catchPhrase: "Quackquackquack"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
