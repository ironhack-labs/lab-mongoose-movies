const celebrityModel = require('./../models/celebrity');
const mongoose = require('mongoose');

const celebrities =[
    {
        name:'Shakira',
        occupation : "singer",
        catchPhrase:'I love tortilla',
    }

    ,{
        name:'Brad Pit',
        occupation : "actor",
        catchPhrase:'I m one of those people you hate because of genetics. It',
    }

    ,{
        name:'George clowney',
        occupation : "actor",
        catchPhrase:'what else',
    }

];

mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
celebrityModel.insertMany(celebrities).then((celebrities) => {
    celebrities.forEach((celebritie) => {
      console.log(celebritie);
    });
}).catch(err => {
    console.log(err);
});
  console.log("toto");