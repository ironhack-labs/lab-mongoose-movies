const mongoose = require('mongoose');
const Celebrity = require('../../models/Celebrity');
mongoose.connect('mongodb://localhost/celebrities-dev', () => {
  console.log("Connected to mongodb://localhost/celebrities-dev!");
});

let celebrities = [
  {
    name       : 'Anna',
    occupation   : 'Actress',
    catchPhrase: 'Oh, fuck!'
  },
  {
    name       : 'Maria',
    occupation   : 'Nodemon',
    catchPhrase: 'What'
  },
  {
    name       : "Foufou",
    occupation   : 'Fake',
    catchPhrase: 'Oh shit'
  }
];

celebrities.forEach(p => {
  let pr = new Celebrity(p);
  pr.save((err, prod) => {
      if (err) {
          throw err;
      }
      console.log(`celebrity guardada ${prod.name}`);
  })
});
