const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/project')
  .then(() => {
    let celebrities = [{
        name: 'Carrie Brownstein',
        occupation: "Singer",
        catchPhrase: "I really don't know what to do when my life is not chaotic."
      },
      {
        name: 'Kurt Cobain',
        occupation: "Singer",
        catchPhrase: "If you ever need anything please don't hesitate to ask someone else first."
      },
      {
        name: 'Patti Smith',
        occupation: "singer",
        catchPhrase: "People have the power to redeem the work of fools."
      }
    ];

    let celebrityObj = celebrities.map(c => new Celebrity(c));

    celebrityObj.forEach(c => c.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));
  });
// mongoose.connection.close();
