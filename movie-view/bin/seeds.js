const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/celebrityDev');

const Celebrity = require('../models/celebrity.js');


const celebrities = [
  {
    name: 'Martin Lawrence',
    occupation: 'Actor',
    catchPhrase: 'Whazzup!',
  },
  {
    name: 'Mahershala Ali',
    occupation: 'Actor',
    catchPhrase: 'Everybody wants to be the king.',
  },
  {
    name: 'Denzel Washington',
    occupation: 'Actor',
    catchPhrase: 'I guarantee it.',
}
];

Celebrity.create(celebrities, (err, docs) =>{
    if(err){
      throw err;
    }
    docs.forEach((celebrities) =>{
      console.log(`${celebrities.name} ${celebrities._id}`);
    });
    mongoose.disconnect();
});
