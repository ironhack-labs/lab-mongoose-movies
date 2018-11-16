const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose
  .connect(
    "mongodb://localhost/mongoose-movies",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected!"));

const celebrities = [
  { name: "Kim Kardashian", occupation: "Influencer", catchPhrase: "bible" },
  {
    name: "Nicole Kidman",
    occupation: "Actress",
    catchPhrase: "I don't really make decisions, I go with the flow."
  },
  {
    name: "Aston Kutcher",
    occupation: "Actor/Entrepreneur",
    catchPhrase: "I believe that opportunity looks a lot like hard work."
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrities).then(celebrities => {
  console.log(`Created ${celebrities.length} celebrities!`);
  mongoose.disconnect();
});
