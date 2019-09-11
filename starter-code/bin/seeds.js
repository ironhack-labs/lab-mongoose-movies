const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

mongoose.connect('mongodb://localhost/starter-code' , {
  useNewUrlParser : true
})

// const celebrities = [
//   {
//   name: 'Emir Kustirica',
//   occupation: 'Filmmaker',
//   catchPhrase: "I am mad,but you're stupid"},
//   {
//     name: 'Arnold Schwarzenegger',
//     occupation: 'Governer',
//     catchPhrase: "Hasta la vista baby"},
//   {
//     name: 'Penelopa Cruz',
//     occupation: 'Actress',
//     catchPhrase: "You cannot live your life looking at yourself from someone else's point of view"}
// ]




// Celebrity.insertMany(celebrities).then(data => {
//   console.log('Great ' + data.length + ' Celebrities added to db');
//   mongoose.connection.close();
// }).catch(err => console.error(err));

const movies=[{
  title:'Blow',
  genre:'Action',
  plot:'There is a lot of Coke'
},
{
  title:'Vicky, Christina, Barcelona',
  genre:'Drama',
  plot: 'There is a lot of "action"'
},
{
  title:'Pulp Fiction',
  genre:'Action',
  plot:'Some action in reversed order'
}]

Movie.insertMany(movies).then(data => {
  console.log('Great! ' + data.length + ' movies added to db');
  mongoose.connection.close();
}).catch(err => console.error(err));