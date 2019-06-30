const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


const dbtitle = 'famousPeople';
// mongoose.connect(`mongodb://localhost/${dbtitle}`);
// Celebrity.collection.drop();

const celebrities = [
  { name : "Kim Kardashian" ,
    occupation : "reality TV",
    catchPhrase : "I'm like literally"


  },
  {
    name : "Bertin Osborne",
    occupation : "TV host",
    catchPhrase : "No se cocinar"
  },
  {
    name : "Elon Musk",
    occupation : "CEO",
    catchPhrase : "we might all be in a simulation"
  }
]
mongoose
.connect('mongodb://localhost/famousPeople', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.insertMany(celebrities)
    .then((data)=>{
      console.log(data)
      console.log(yuhuuu)
      mongoose.disconnect()
    }).catch((err)=>{
      console.log(err)
    })

  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
