const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db-celebrities', {useMongoClient: true});
const Celebrity = require('../models/celebrity');


const celebrities = [
  {
    name: "celebrity_1",
    ocupation: "ocupation_1",
    catchPhrase: "catchPhrase_1"

  },
  {
    name: "celebrity_2",
    ocupation: "ocupation_2",
    catchPhrase: "catchPhrase_2"
  },
  {
    name: "celebrity_3",
    ocupation: "ocupation_3",
    catchPhrase: "catchPhrase_3"
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    console.log(docs);
    throw err;
  }
  console.log()
  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });

  mongoose.connection.close();
});
