const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity-model.js');

// const dbName = '<awesome-project>';
// mongoose.connect(`mongodb://localhost/${dbName}`);

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebritiesData = [
  {
    name: "Nizaroni",
    occupation: "pizzaïolo",
    catchPhrase: "Super music!"

  },
  {
    name: "Mostafa",
    occupation: "singer",
    catchPhrase: "Super singer"
  },
  {
    name: "Stalone",
    occupation: "movie actor",
    catchPhrase: "super dumb"
  }
  //Paste here the array of items in the db
]

Celebrity.create(celebritiesData)
  .then((celebritiesRes)=>{
    console.log(`Created ${celebritiesData.length} documents`)
  })
  .catch((err) => {
    console.log('Celebrities creation failed!', err)
  });
