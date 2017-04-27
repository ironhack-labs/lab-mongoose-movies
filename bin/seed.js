const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose-movies');
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sapien et ante eleifend, eget egestas nulla feugiat.',
  },
  {
    name: 'Tom Hanks',
    occupation: 'actor',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sapien et ante eleifend, eget egestas nulla feugiat.',
  },
  {
    name: 'Tom Hardy',
    occupation: 'actor',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sapien et ante eleifend, eget egestas nulla feugiat.',
  },
  {
    name: 'Britney Spears',
    occupation: 'singer',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sapien et ante eleifend, eget egestas nulla feugiat.',
  },
  {
    name: 'Shakira Mebarak',
    occupation: 'singer',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sapien et ante eleifend, eget egestas nulla feugiat.',
  },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(celebrity => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
