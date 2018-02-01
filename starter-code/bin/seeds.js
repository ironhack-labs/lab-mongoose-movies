'use-strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity', {useMongoClient: true});

const Celebrity = require('../models/celebrity');

const celebrity = [{
  name: 'Ryan Reynolds',
  occupation: 'Actor',
  catchPhrase: `I just love bikes. It's not the safest passion to have, but I guess it's better than Russian roulette`
},
{
  name: 'Emily Blunt',
  occupation: 'Actor',
  catchPhrase: `People quit on jobs. They quit on marriages. They quit on school. There's an immediacy of this day and age that doesn't lend itself to being committed to anything.`
},
{
  name: 'Warren Buffet',
  occupation: 'Cash money',
  catchPhrase: 'My wallet is heavier than you'
}];

Celebrity.create(celebrity, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
