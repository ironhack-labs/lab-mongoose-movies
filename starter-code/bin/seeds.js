const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect(`mongodb://localhost/starter-code`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Celebrity.collection.drop();

//Create an array of 3 objects,
const celebrity = [
  {
    name: "James Bond",
    occupation: "Actor",
    catchPhrase: "The name is Bond, James Bond",
  },
  {
    name: "Don Vito Corleone",
    occupation: "Actor",
    catchPhrase: "I'm going to make him an offer he can't refuse",
  },
  {
    name: "Barney Stinson",
    occupation: "Actor",
    catchPhrase: "Legendary",
  },
];


//Call the `Celebrity` model's `create` method with the array as argument
Celebrity.create(celebrity, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrity.length} celebrity`)
    mongoose.connection.close();
  });

//Run the seed file with `node` to seed your database.
//Check the database with the `mongo` command to confirm that your data was saved.
//node bin/seeds.js
