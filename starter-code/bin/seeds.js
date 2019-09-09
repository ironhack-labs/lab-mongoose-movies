const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'Celebrity';
mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


let celebArr = [
    {
    name: "Salem",
    occupation: "Actress",
    catchPhrase: "Yo!"
    }
    ,
    {
    name: "Who",
    occupation: "Actress",
    catchPhrase: "Yo!"
    }
      , 
    {
    name: "Whoat",
    occupation: "Actress",
    catchPhrase: "Yo!"
    }
]


Celebrity.create(celebArr, (err) => {
  if (err) { throw(err) }
  console.log(celebArr)
  mongoose.connection.close();
});

module.exports = Celebrity;



