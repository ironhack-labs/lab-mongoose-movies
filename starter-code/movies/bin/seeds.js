const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db-celebrities', {useMongoClient: true});
const Celebrity = require('../models/celebrity');


const celebrities = [
  {
    name: "sfwe",
    ocupation: "asdasd",
    catchPhrase: "asdasdasd"

  },
  {
    name: "sfwe",
    ocupation: "asdasd",
    catchPhrase: "asdasdasd"
  },
  {
    name: "sfwe",
    ocupation: "asdasd",
    catchPhrase: "asdasdasd"
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
