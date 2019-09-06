const mongoose = require('mongoose');

const Celebrity = require('./../models/celebrity');


mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    createNewCelebrity () 
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


function createNewCelebrity () {
    Celebrity.create({
        name: 'Britney Spears',
        occupation: 'Singer',
        catchPhrase: 'Its Britney Bitch!'
      },
      {
        name: 'Herman José',
        occupation: 'Comedian',
        catchPhrase: 'Amanhã faço dieta!'
      },
      {
        name: 'Salvador Dali',
        occupation: 'Painter',
        catchPhrase: 'I dont do drugs, im drugs!'
      })
      .then(celebrity => {
        console.log('Created new celebrity');
        console.log(celebrity);
        
      })
      .catch(error => {
        console.log('Had an error creating the celebrity');
      })
}

