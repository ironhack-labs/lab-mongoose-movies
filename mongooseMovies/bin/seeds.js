const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseMovies');

const Celebrity = require('../models/celebrity.js');


const celebritys = [
  {
    name: 'Arnold Schwarzzanager',
    occupation: 'actor',
    catchPhrase: "I'll be bock",
  },
  {
    name: 'Fred Flinstone',
    occupation: 'actor',
    catchPhrase: 'yabba dabba do!',
  },
  {
    name: 'Tony Montana',
    occupation: 'actor',
    catchPhrase: 'Say hello, to my little friend',
  }
];


   //db.celebrity.insertMany([...])
  //                  |
  //      -------------
  //      |
Celebrity.create(celebritys, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneCelebrity) => {
    console.log(`${oneCelebrity.name} ${oneCelebrity._id}`);
  });

  mongoose.disconnect();
});
