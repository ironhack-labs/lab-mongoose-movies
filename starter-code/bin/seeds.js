/*const Celebrity = require('../models/celebrity.model');
const mongoose = require('mongoose');
require('../config/db.config')

const celebrities = [
{
  name: 'Bugs Bunny',
  occupation: 'Cartoon',
  catchPhrase: "that's all folks"
},
{
  name: "Joey Tribbiani",
  occupation: "Actor",
  catchPhrase: "How YOU doin'?",
},
{
  name: "Sheldom Cooper",
  occupation: "Scientist",
  catchPhrase: "Bazinga!",
},
{
  name: "Michael Jordan",
  occupation: "Basketball player",
  catchPhrase: "To learn to succeed, you must first learn to fail.",
}
]

Celebrity.create(celebrities)
  .then(celebrities => console.info(`${celebrities.length} new celebrities added to the database`))
  .catch(error => console.error(error))
  .then(()=> mongoose.connection.close());*/


  const Movie = require('../models/movie.model');
  const mongoose = require('mongoose');
  require('../config/db.config')
  
  const movies = [
  {
    title: 'Aquaman',
    genre: 'Fantasy',
    plot: "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and to be a hero to the world."
  },
  {
    title: 'Shrek',
    genre: 'Animation',
    plot: "When a green ogre called Shrek discovers his swamp has been 'swamped' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out, with a very loud donkey by his side, to 'persuade' Farquaad to give his swamp back."
  },
  {
    title: 'Saving Private Ryan',
    genre: 'War',
    plot: "James Ryan, who has parachuted into France during the Allied invasion of Europe, has just lost three brothers in combat. Government policy dictates that he should return home lest his family be deprived of all its male offspring. A team of soldiers, led by Captain John Miller and fresh from the beaches of Normandy, is assembled to find and save Private Ryan."
  }
  ]
  
  Movie.create(movies)
    .then(movies => console.info(`${movies.length} new celebrities added to the database`))
    .catch(error => console.error(error))
    .then(()=> mongoose.connection.close());