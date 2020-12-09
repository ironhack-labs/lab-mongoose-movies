const Celebrity = require('../models/Celebrities');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/starter-code')

const musicArtists = [
  {
    name: 'Bob Dylan',
    occupation: 'Singer',
    catchPhrase: `The only thing I knew how to do was to keep on keeping on.`,
  },
  {
    name: 'Jimi Hendrix',
    occupation: 'Singer',
    catchPhrase: 'When the power of love overcomes the love of power, the world will know peace.',
  },
  {
    name: 'Mick Jagger',
    occupation: 'Singer',
    catchPhrase: 'Anything worth doing is worth overdoing.',
  },
]

Celebrity.create(musicArtists, (err) => {
  if(err) { throw(err) }
  console.log(`Created ${musicArtists.length} celebrities`);
  mongoose.connection.close;
})