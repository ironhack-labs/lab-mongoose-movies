const Celebrity = require('../models/Celebrity.model');
const { config } = require('dotenv');

require ("../config/config.db.js")

const celebrities = [{
    name: 'Reese Witherspoon',
    occupation: 'actress',
    catchPhrase: 'Stick with the nice boys... bad boys do not bring you coffee in bed, I will tell you that for free.'
  },{
    name: 'Shailene Woodley',
    occupation: 'actress',
    catchPhrase: 'Champagne is never a mistake'
  },{
    name: 'Meryl Streep',
    occupation: 'actress',
    catchPhrase: 'You’re very short. I don’t mean it in a negative way. I find little people to be untrustworthy. My apologies,'
  },{
    name: 'Laura Dern',
    occupation: 'actress',
    catchPhrase: 'Maybe you should have shown a woman a little respect.'
  }
];

Celebrity.create(celebrities)
  .then(dbCelebrity => {
    console.log(`Created ${dbCelebrity.length} users`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while creating fake users in the DB: ${err}`)
  );