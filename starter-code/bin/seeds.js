const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbtitle}`);


const ourCelebrities = [{
    name: "Jelena",
    occupation: "Mama",
    catchPhrase: "O my God"
  },

  {
    name: "Igor",
    occupation: "Papa",
    catchPhrase: "No, No"
  },

  {
    name: "Irina",
    occupation: "sister",
    catchPhrase: "Mmm, no"
  }
]

Celebrity.create(ourCelebrities, (err) => {
  if (err) return handleError(err);
  console.log("celebrities are created");
})