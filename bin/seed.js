const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = "lab-mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
      name: 'Arnold Schwarzenegger',
      occupation:'Actor, Governess',
      catchPhrase: "I'll be back"
  },
  {
    name: 'Barack Obama',
    occupation:'Politican',
    catchPhrase: "Yes, we Can!"
},
{
  name: 'Britney Spears',
  occupation:'Singer',
  catchPhrase: "Oops I did it again.."
}
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebs`);
  mongoose.connection.close();
});

