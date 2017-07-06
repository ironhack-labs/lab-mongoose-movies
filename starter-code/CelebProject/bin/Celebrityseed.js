const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity')
  .then(() => {
    let celebridades = [
      {
        name: 'Steve Jobs',
        occupation: 'Deceitful salesman',
        catchPhrase: 'Think Different',
      },
      {
        name: 'Bill Gates',
        occupation: 'Philanthropist',
        catchPhrase: 'Software is a great combination between artistry and engineering',
      },
      {
        name: 'Nicola Tesla',
        occupation: 'Electrical engineering',
        catchPhrase: 'The present is theirs; the future, for which I really worked, is mine',
      },
    ];

    let celebObj = celebridades.map( c => new Celebrity(c));

    celebObj.forEach( c => c.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New Celeb Register [${obj.name}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
