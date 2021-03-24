require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const celebrity = [ 
{
  name: 'Jim Parsons',
  occupation: 'Actor',
  catchPhrase: 'Bazinga'
}, 
{
  name:'Johnny Galecki',
  occupation: 'Actor',
  catchPhrase: 'We’re here to see Koothrappali, not kill Batman.'
},
{
  name: 'Kunal Nayyar',
  occupation: 'Actor',
  catchPhrase: 'Damn, there’s always a catch.'
}
];

mongoose
  .connect('mongodb://localhost/lab-celebrity', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.insertMany(celebrity)
    .then(insertedCelebrity => {
      console.log(`Inserted ${insertedCelebrity.length} celebrity`);

      mongoose.connection.close();
    })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });