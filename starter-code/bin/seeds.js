const Celebrity = require('../models/celebrity.js');

const celebrities = [
  {
    name: 'Britney Spears',
    occupation: 'Singer',
    catchPhrase: 'Baby, one more time'
  },
  {
    name: 'Mike Jagger',
    occupation: 'Singer',
    catchPhrase: 'No satisfaction'
  },
  {
    name: 'Bruce Lee',
    occupation: 'Actor',
    catchPhrase: 'Empty your mind'
  }
];

Celebrity.deleteMany()
  .then(() => {
    return Celebrity.create(celebrities);
  })
  .then((result) => {
    console.log('DB was seeded with: ', result);
  })
  .catch((err) => {
    console.log(err);
  });
