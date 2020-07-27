const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbtitle = "celebrity";
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Celebrity.collection.drop();

const celebrities = [
  {
    name: "Shakira",
    occupation: "singer",
    catchPhrase: "The hips dont't lie",
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "I set a goal. My goal was independence",
  },
  {
    name: "Jennifer Aniston",
    occupation: "actor",
    catchPhrase: "Friend's is my life",
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});
