const Celebrity = require('./models/celebrity');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-db')
  .then(() => {
    let celebrities = [{
        name: 'A',
        occupation: 'a',
        catchPhrase: "AaA",
      },
      {
        name: 'B',
        occupation: 'b',
        catchPhrase: "BbB",
      },
      {
        name: 'C',
        occupation: 'c',
        catchPhrase: "CcC",
      },
    ];

    let celebrityObj = celebrities.map(p => new Celebrity(p));

    celebrityObj.forEach(p => p.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
