const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity.js');

mongoose.connect('mongodb://localhost/movies');

const celebritiesArray = [
{
  name: 'Jennifer Aniston',
  occupation: 'actress',
  catchPhrase: 'Oh, I’m sorry. Did my back hurt your knife?'
},
{
  name: 'Chuck Norris',
  occupation: 'actor',
  catchPhrase: 'Is this what you call a punch'
},
{
  name: 'Keanu Reeves',
  occupation: 'actor',
  catchPhrase: 'I don\'t believe in fate. Hate the thought im being manipulated'
}
];

Celebrity.create (
  celebritiesArray,
  (err, celebrityResults) => {
    if (err) {
      console.log('ERROR');
      return;
    }
    celebrityResults.forEach((oneCelebrity) => {
      console.log(`Added ${oneCelebrity.name} to Movies DB`);
    });
    mongoose.connection.close();
  }
);
