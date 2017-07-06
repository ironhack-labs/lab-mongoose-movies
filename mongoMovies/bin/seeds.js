const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoMovies')
  .then(() => {
    let celebrities = [{
        name: "Ana Rosa Quintana",
        occupation: "Writer",
        catchPhrase: "Hello word 1"
      },
      {
        name: "Mariano Rajoy",
        occupation: "Runner",
        catchPhrase: "Hello word 2"
      },
      {
        name: "Pablo Iglesias",
        occupation: "Showman",
        catchPhrase: "Hello word 3"
      },
    ];

    let celebritiesObj = celebrities.map(c => new Celebrity(c));

    celebritiesObj.forEach((c, index, array) => c.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New celebrity in the db. Id: ${obj._id}`);
      }
      if (index === array.length - 1) mongoose.disconnect();
    }));
  });
