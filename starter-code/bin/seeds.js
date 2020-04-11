
const mongoose = require('mongoose');

const Celeb = require('../models/celebrity');


mongoose.connect(`mongodb://localhost/mongoose-movies`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cel = [
  {
    name: "Dave Grohl",
    occupation: "Singer",
    catchPhrase: "I've got another confession to make"
  },
  {
    name: "Greg Graffin",
    occupation: "Singer",
    catchPhrase: "Ya hey!"
  },
  {
    name: "Karl Marx",
    occupation: "Author",
    catchPhrase: "Proletarier aller Länder, vereinigt euch!"
  },
];

Celeb.create(cel).then(() => {
  console.log(`Created ${cel.length} celebrities`);
  mongoose.connection.close();
});