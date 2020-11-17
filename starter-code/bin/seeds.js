const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const celebrities = [
  {
    name: "Pete(r) Doherty",
    occupation: "Musician",
    catchPhrase: "Drugs, scandals, Kate Moss and Amy Winehouse.",
  },
  {
    name: "Eminem / Slim Shady",
    occupation: "Rapper",
    catchPhrase:
      "Cause we need a little controversy. Cause it feels so empty without me",
  },
  {
    name: "Marilyn Manson",
    occupation: "Rocker",
    catchPhrase: "We are chaos",
  },
];

mongoose
  .connect("mongodb://localhost/lab-mongoose-movies", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    return Celebrity.insertMany(celebrities);
    //return Book.insertMany(dataBooks);
  })
  .then((celebrities) =>
    console.log(`Celebrities inserted to database: ${celebrities}`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
