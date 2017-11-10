const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/celebrity',{useMongoClient:true})
const Celebrity = require('../models/celebrity');

 Celebrity.collection.drop();
const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: '',
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: '',
  },
  {
    name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: '',
  },
];


Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});
