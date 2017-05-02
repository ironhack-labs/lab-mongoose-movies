const mongoose      = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-movies');

const Celebrity     = require('../models/celebrity-model.js');

const celebrities   = [
        {
          name: 'Colby Allen',
          occupation: 'Teacher',
          catchPhrase: 'Cool Cool'
        },
        {
          name: 'Barack Obama',
          occupation: 'President',
          catchPhrase: 'yeaaa'
        },
        {
          name: 'Kim Kardashian',
          occupation: 'Public Figure',
          catchPhrase: 'Does this make me look fat?'
        }
      ];

Celebrity.create(celebrities, (err, celebrityDocs)=> {
  if(err){
    throw err;
  }
  celebrityDocs.forEach((oneCelebrity)=>{
    console.log(`CELEBRITY: ${oneCelebrity.name} -> ${oneCelebrity.catchPhrase} `);
  });
});
