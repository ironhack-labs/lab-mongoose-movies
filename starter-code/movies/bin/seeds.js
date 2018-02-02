const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebrities");
const Celebrity = require("../models/celebrity");

const celebrities = [
  {
    name: "Morgan Freeman",
    occupation: "Actor",
    catchPhrase: "The best way to garantee a loss is to quit."
  },
  {
    name: "George Clooney",
    occupation: "Actor",
    catchPhrase: "The only failure is not to try."
  },
  {
    name: "Robert De Niro",
    occupation: "Actor",
    catchPhrase:
      "Time goes on. So whatever you're going to do, do it. Do it now. Don't wait."
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(celebrity => {
    console.log(`${celebrity.name} ${celebrity._id}`);
  });
  mongoose.connection.close();
});
