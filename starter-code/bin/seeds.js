const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

const dbName = 'CelebrityDB'
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true
});

const celebrities = [{
    name: "Sara",
    occupation: "veterinarian",
    catchPhrase: "Live the present",
  },
  {
    name: "Ana",
    occupation: "egiptologist",
    catchPhrase: "The key is in the past",
  },
  {
    name: "Pedro",
    occupation: "engineer",
    catchPhrase: "The future is now",
  }
];

Celebrity.create(celebrities)
  .then(celebsCreated => {
    console.log(`Creadas ${celebsCreated.length} personalidades`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))