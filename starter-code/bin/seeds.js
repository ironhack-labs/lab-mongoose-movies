/**
Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
Call the Celebrity model's create method with the array as argument.
In the create method's callback, display feedback.
Run the seed file with node to seed your database.
Check the database with the mongo command to confirm that your data was saved.
 */

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const celebritiesArr = [
  { name: "Sharukh Khan", occupation: "Film Actor", catchPhrase: "Top Actor" },
  {
    name: "Mahatma Gandhi",
    occupation: "Freedom Fighter",
    catchPhrase: "Speaker",
  },
  { name: "Swamy Vivekanda", occupation: "Guru", catchPhrase: "Speaker" },
];

const moviesArr = [
  {
    title: "DDLJ",
    genre: "romance",
    plot: "a Love story on Indians who lives in Europe",
  },
  { title: "SuperMan", genere: "action", plot: "a Super hero movie" },
  { title: "avengers", genere: "action", plot: "a Super hero movie" },
];

Movie.create(moviesArr)
  .then((moviesArrFromDB) => {
    console.log(" Movie Document created ...");
    mongoose.connection.close();
  })
  .catch((err) => console.log("Error while creating Movies Documnet", err));

// Celebrity.create(celebritiesArr).then(celebritiesArr => {
//     console.log(" Celebrity Document created ...");
//     mongoose.connection.close();
// }).catch(err => console.log("Error while creating Celebrity Documnet", err));
