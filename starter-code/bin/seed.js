//4. In seeds.js file:
//   Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
//   Call the Celebrity model's create method with the array as argument.
//   In the create method's callback, display feedback.
// 5. Run the seed file with node to seed your database.
// 6. Check the database with the mongo command to confirm that your data was saved.

require("dotenv").config();
const mongoose = require("mongoose");
// const celebrityModel = require("../models/celebrity");
const movieModel = require("../models/movie");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// const celebrities = [
//   {
//     name: "Aida",
//     occupation: "full time mom and developper",
//     catchPhrase: "what else ?"
//   },
//   {
//     name: "Aimee",
//     occupation: "Future P-O",
//     catchPhrase: "Hahahahah ha ha "
//   },
//   {
//     name: "Franck",
//     occupation: "Full time dad",
//     catchPhrase: "toto"
//   }
// ];

// celebrityModel
//   .insertMany(celebrities)
//   .then(dbRes => console.log("success"))
//   .catch(dbErr => console.log("something went wrong with the db", dbErr));

const movies = [
    {
      title: "La vie d'Aimée",
      genre: "Horror",
      plot: "Lorem ipsum dolor sit amet."
    },
    {
      title: "Une longue balade",
      genre: "Comédie",
      plot: "Lorem ipsum dolor sit amet."
    },
    {
      title: "Une longue balade 2: le retour",
      genre: "Comédie",
      plot: "Lorem ipsum dolor sit amet."
    }
];

movieModel
  .insertMany(movies)
  .then(dbRes => console.log(dbRes,"success"))
  .catch(dbErr => console.log("something went wrong with the db", dbErr));