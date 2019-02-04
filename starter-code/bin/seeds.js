const mongoose = require('mongoose');
const celeb = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Corey Tylor",
    occupation: "musician",
    catchPhrase: "Here we go again, motherfucker"
  },
  {
    name: "Trent Reznor",
    occupation: "musician, composer, producer and multi-instrumentalist",
    catchPhrase: "I want to fuck you like an animal"
  },
  {
    name: "Maynard James Keenan",
    occupation: "musician, composer, record producer, winemaker and actor",
    catchPhrase: "I know the pieces fit"
  }
]

celeb.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close();
});