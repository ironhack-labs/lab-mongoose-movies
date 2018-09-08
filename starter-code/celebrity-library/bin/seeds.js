const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-library';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  { 
    name: 'Grumpy the Cat',
    occupation: 'stare at the camera while grumpy',
    catchPhrase: "feed me or I'll kill you",
  },
  { 
    name: 'Felix the Cat',
    occupation: 'This cool cat has been famous for almost 100 years now.',
    catchPhrase: "None, Felix the Cat was created in the silent film era",
  },
  { 
    name: 'Tom',
    occupation: 'Try to catch Jerry and not get hurt in the process.',
    catchPhrase: "Jerry, Jerry, where are you? I'll do anything. I'll give you... ",
  },
  { 
    name: 'Sylvester',
    occupation: 'Works at Looney Toons cartoons, where he famously chased Tweety Bird as well as Speedy Gonzales and Hippety Hopper.',
    catchPhrase: "Sufferin’ succotash!",
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});