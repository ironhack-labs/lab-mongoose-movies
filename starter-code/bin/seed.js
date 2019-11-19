// Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
// Call the Celebrity model's create method with the array as argument.
// In the create method's callback, display feedback.

const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

const celebrityDetails = [
{
    name:'Jay-Z',
    occupation: 'Rapper',
    catchPhrase:"Yo",
},
{
    name:"Ben Stiller",
    occupation:"Actor",
    catchPhrase:"Blue Steel",
},
{
    name: "Daniel Caesar",
    occupation:'Singer',
    catchPhrase:'Yes',
}
]

mongoose
  .connect('mongodb://localhost:27017/starter-code', { useNewUrlParser: true })
  .then(() => {
    return Celebrity.create(celebrityDetails);
  })
  .then(insertedDocuments => {
    console.log('Inserted documents:', insertedDocuments.length);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
