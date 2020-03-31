const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
// const Movie= require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Kim Kardashian",
    occupation: "Unknown",
    catchPhrase: "Bible"
  }]


  // const movies= [
  //   {
  //     title: "Harry Potter",
  //     genre: "Magic",
  //     plot: "Harry is a wizard. end."
  //   },
  //   {
  //     title: "Mean Girls",
  //     genre: "Humor",
  //     plot: "in wedsneys we wear pink"
  //   }]

Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close();
})

// Movie.create(movies, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${movies.length} movies`)
//   mongoose.connection.close();
// })