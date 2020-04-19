// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'celebrities';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Anne Jacqueline Hathaway",
//     occupation: "actor",
//     catchPhrase: "You cannot live your life to please others. The choice must be yours"
//   },
//   {
//     name: "Madonna Louise Veronica Ciccone",
//     occupation: "singer",
//     catchPhrase: "I laugh at myself. I don’t take myself completely seriously. I think that’s another quality that people have to hold on to… you have to laugh, especially at yourself."
//   },
//   {
//     name: "Will Smith",
//     occupation: "actor",
//     catchPhrase: "I wake up every morning believing today is going to be better than yesterday."
//   }
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });


const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Bad Boys for Life",
    genre: " comedy - action",
    plot: "The Miami Police Department and its elite AMMO team try to shoot down Armando Armas, head of a drug cartel. Armando is a cold-blooded killer with a vicious and polluting nature. He is committed to the work of the cartel and is sent by his mother Isabel, to kill Mike."
  },
  {
    title: "The Devil Wears Prada",
    genre: " comedy-drama ",
    plot: "is a fictional novel loosely based on author Lauren Weisberger’s own experiences as an assistant in the fashion industry"
  },
  {
    title: "The Intern",
    genre: " comedy",
    plot: "Jules Ostin (Anne Hathaway) is the young founder of a very lucrative online fashion business. As part of a community outreach program, she hires 70-year-old widower Ben Whittaker (Robert De Niro) to be her new intern."
  }
];

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});


