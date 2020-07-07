/* require("dotenv").config(); */
require("./../app");

const celebrityModel = require("./../models/Celebrity");

const celebrities = [
  {
    name: "Ada Lovelace",
    occupation: "actress",
    catchPhrase: "Ada is beautiful",
  },
  {
    name: "Doug Crockford",
    occupation: "singer",
    catchPhrase: "Have a wonderful voice",
  },
  {
    name: "Jill Fresh",
    occupation: "model",
    catchPhrase: "have gorgeous ass",
  },
 
];

celebrityModel.insertMany(celebrities)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));
