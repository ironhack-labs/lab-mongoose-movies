const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/celebrities", {
  useNewUrlParser: true,
});

const celebrities = [
  {
    name: "Cookie Monster",
    occupation: "Eating Cookies",
    catchphrase: "Me love Cookies",
  },

  {
    name: "Albert Einstein",
    occupation: "Physicist",
    catchphrase: "e = mc2",
  },
  {
    name: "Hero",
    occupation: "Poet",
    catchphrase: "Everything starts with a dot",
  },
];

Celebrity.insertMany(celebrities)
  .then((data) => {
    console.log("Success");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
