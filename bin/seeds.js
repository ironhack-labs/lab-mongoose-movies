const celebritiesModel = require('../models/celebrity');

const listCelebrities = [
  {
    name: 'Buzz Ligthyear',
    occupation: 'Galactic Toy',
    catchPhrase: 'To infinity and beyond',
  },
  {
    name: 'Al Pacino',
    occupation: 'Actor',
    catchPhrase: 'That role was mine for the taking but I couldn\'t understand the script',
  },
  {
    name: 'Clint Eastwood',
    occupation: 'Actor',
    catchPhrase: 'You have to trust your instincts. There\'s a moment when an actor has it, and he knows it.',
  },
];

celebritiesModel.create(listCelebrities)
  .then(data => console.log('Data added', data))
  .catch(error => console.log('Couldn\'t add files', error));
