const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'scientology is GREAT!!'
  },
  {
    name: 'Al Pacino',
    occupation: 'Actor',
    catchPhrase: 'Wooh ahh!'
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'If everything was perfect, you would never learn and you would never grow.'
  },
  {
    name: 'Daffy Duck',
    occupation: 'Duck',
    catchPhrase: "You're despicable!"
  },
];

mongoose
  .connect('mongodb://localhost/mongoose-movies-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    
    Celebrity.collection.drop(); //cleans the database

    Celebrity.create(celebrities)
        .then(celebritiesFromDB => {
            console.log({ celebritiesFromDB });
        }).catch(err => console.log(`error seeding the DB: ${err}`))

    setTimeout(() => {
        mongoose.disconnect();
    }, 5000)
    
  })
  .catch(err => console.error('Error connecting to mongo', err));