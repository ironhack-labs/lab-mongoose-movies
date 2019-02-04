const mongoose = require("mongoose");
const Celebrity = require("../views/models/celebrity");

Celebrity.collection.drop();


mongoose.connect("mongodb://localhost/starter-code")

const celebrities = [
  {
    name: "Fernando Torres",
    occupation: "Soccer player",
    catchPhrase: "aaaaaaaa"
  },

  {
    name: "Billy Joe Armstrong",
    occupation: "Singer",
    catchPhrase: "bbbbbb"
  },

  {
    name: "Jacoby Shaddix",
    occupation: "Singer",
    catchPhrase: "cccccc"
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  mongoose.connection.close();
});