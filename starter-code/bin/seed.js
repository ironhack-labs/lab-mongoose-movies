const Celeb = require("../models/celebrity");
const mongoose = require('mongoose');


const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tony Stark",
    occupation: "Genius, Billionaire, Playboy Philanthropist",
    catchphrase: "I am Ironman"
  },
  {
    name: "Steve Rogers",
    occupation: "Veteran",
    catchphrase: "Courage, Honor, Loyalty, Sacrifice. You're braver than you think."
  },
  {
    name: "Thor Odinson",
    occupation: "Lord of Thunder",
    catchphrase: "Loki, no!"
  },
]

Celeb.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});