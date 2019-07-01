const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbceleb = 'celebs';
mongoose.connect(`mongodb://localhost/${dbceleb}`);
Celebrity.collection.drop();

const celebrities = [
  {
    name: 'Joey Tribbiani',
    ocupation: 'Actor',
    catchPhrase: `How you doin'?`
  },
  {
    name: 'Beyonce',
    ocupation: 'Singer',
    catchPhrase: 'Bootilicious'
  },
  {
    name: 'Bruce Banner',
    ocupation: 'Hulk',
    catchPhrase: `Don't make me angry`
  }
]

mongoose
.connect('mongodb://localhost/celebs', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.insertMany(celebrities)
    .then((data)=>{
      mongoose.disconnect()
    }).catch((err)=>{
      console.log(err)
    })

   })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });