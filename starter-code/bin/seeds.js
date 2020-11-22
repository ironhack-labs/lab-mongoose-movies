const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

mongoose
  .connect('mongodb://localhost/movies-celebrities', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
    {
        name: "Freddie Mercury",
        occupation: "Singer",
        catchPhrase: "Show must go on"
    },
    {
        name: "Harry Potter",
        occupation: "Wizard",
        catchPhrase: "The boy who lived"
    },
    {
        name: "Voldemort",
        occupation: "The bad guy",
        catchPhrase: "Avada Kedavra"
    }
];

Celebrity.create(celebrities)
.then(newCelebrities => {
    console.log(`You just uploaded ${newCelebrities.length} celebrities to the database!`);
    mongoose.connection.close();
})
.catch(error => {
    console.log('There was an error while uploading your celebrities to the database: ', error);
});