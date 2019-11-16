const mongoose = require("mongoose");
const Celebrities = require("../Models/Celebrity")

mongoose
  .connect('mongodb://localhost/RandomCollection', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [{
  name: '',
  occupation: '',
  catchPhrase: '',
}, {
  name: '',
  occupation: '',
  catchPhrase: '',
}, {
  name: '',
  occupation: '',
  catchPhrase: '',
}]; //make celebrities

//follow steps 5 & 6 of iteration1

Celebrities.create(celebrities,()=> console.log('success!'));