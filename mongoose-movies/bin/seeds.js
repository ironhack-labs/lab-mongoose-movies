const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

celebrities = [
    {
    name       : "Britney Spears",
    occupation      : "Singer",
    catchPhrase   : "Toxic"
    },
    {
    name       : "Kim Kardashion",
    occupation      : "Model",
    catchPhrase   : "Not sure"
    },
    {
    name       : "Kanye West",
    occupation      : "Rapper",
    catchPhrase   : "Also not sure"
    }
]

Celebrity.create(celebrities, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((celebrities) => {
      console.log(celebrities.name)
    });
    mongoose.connection.close();
  });