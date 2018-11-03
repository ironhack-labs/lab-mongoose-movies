const mongoose = require('mongoose');
const celebrityModel = require('../models/Celebrity.js');


const dbName = 'lab-4week-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
  name: 'Kungen',
  occupation: 'Being Kungen',
  catchPhrase: 'Im Kungen'
  },
  {
  name: 'Test 1',
  occupation: 'Test 1',
  catchPhrase: 'Test 1'
  },
  {
    name: 'Santa Claus',
    occupation: 'Santa Claus',
    catchPhrase: 'Ho Ho Ho'
  }
] 


celebrityModel.create(celebrities)
  .then((data) => {
     console.log('The user is saved and its value is: ', data) })






