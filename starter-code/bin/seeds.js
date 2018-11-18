const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect(`mongodb://localhost/celebrities`);

const celebrities = [
  {
    name: 'Nicolas Cage',
    occupation: ['Actor...?', 'Comedian...?', 'Undefined'],
    catchPhrase: 'Nobody knows how it feels beeing the worst actor in the world',
  },
  {
    name: 'Robert Darwin jr',
    ocuppation: ['Actor', 'Iron-man', 'Sherlock Holmes'],
    catchPhrase: 'I\'m Iron-man'
  },
  {
    name: 'Ian McKellen',
    occupation: ['Actor', 'Gandalf', 'Magneto'],
    
  }

]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});