const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
  { name: 'Pierce', occupation: 'whatever1', catchPhrase: 'hey1' },
  { name: 'Bono', occupation: 'whatever2', catchPhrase: 'hey2' },
  { name: 'Addams', occupation: 'whatever3', catchPhrase: 'hey3' },
];

// mongoose.connect('mongodb://localhost:27017/iron-amazon', { useNewUrlParser: true })
//   .then(() => {
//     console.log('connected to db');
//     return Product.create(products);
//   }).then((data) => {
//     console.log('created data', data);
//   }).then(() => {
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error);
//     mongoose.connection.close();
//   });
