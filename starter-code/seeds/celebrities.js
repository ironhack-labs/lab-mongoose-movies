const Celebrity = require("../models/Celebrity");
const connection = require("../connection-db")

const celebrities = [
  {
    name: "",
    occupation: "",
    catchPhrase: ""
  },
  {
    name: "",
    occupation: "",
    catchPhrase: ""
  },
  {
    name: "",
    occupation: "",
    catchPhrase: ""
  }
];

connection (async () => {
  await Celebrity.collection.drop();
  await Celebrity.create(celebrities);
});



