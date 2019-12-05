const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');



let celebrities = [
  {
    name: 'Johnny Ngyen',
    occupation: 'USA',
    catchPhrase: 'If you have rich mindset, you gonna be rich',
  },
  {
    name: 'Brad Pitt',
    occupation: 'USA',
    catchPhrase: 'I love kids'
  },
  {
    name: 'Tom Cruz',
    occupation: 'USA',
    catchPhrase: 'I love to do cool tricks'
  }
]



mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(celebrities)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



//     mongoose.connect("mongodb://localhost:27017/celebrities", { useNewUrlParser: true })
//   .then(x => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch(err => {
//     console.error("Error connecting to mongo", err);
//   });
// Celebrity.insertMany(celebrities)
//   .then(celebrities => {
//     celebrities.forEach(celebrity => {
//       console.log(celebrity.name);
//     });
//     mongoose.connection.close(); // Properly close mongoose's connection once you're done
//   })
//   .catch(error => {
//     console.log(error);
//   });


  //npm i
  //npm run dev
  
  