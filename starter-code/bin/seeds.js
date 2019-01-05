const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbtitle = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Celebrity.collection.drop();


const celebrities = [
  {
    name: "Axel",
    occupation: "Influencer",
    catchPhrase: "I influence everything"
          },
  {
    name: "Luisa",
    occupation: "Actress",
    catchPhrase: "I win an Oscar"
  },
  {
    name: "Jen",
    occupation: "Singer",
    catchPhrase: "Lalaland"
  },

]


Celebrity.create(celebrities);