const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrity.deleteMany().then(() => {

  Celebrity.create([
    {
      name: "Stephanie Gilmore",
      occupation: "sports",
      catchPhrase:
        "It’s always when you put that expectation that it doesn’t happen"
    },
    {
      name: "Homer Simpson",
      occupation: "comedian",
      catchPhrase: "D'oh"
    },
    {
      name: "Marie Curie",
      occupation: "other",
      catchPhrase:
        "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less"
    }
  ]).then((createdCelebrities) => {
    console.log(createdCelebrities.length + " celebrities have been created");
    mongoose.connection.close();
  });
});

