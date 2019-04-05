const Celebrity = require('../models/celebrity.model');
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
  .then(()=> mongoose.connection.close());