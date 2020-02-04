const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
    {
        name: 'Kan\'t Vaccinate Themkids',
        occupation: 'Stunt Driver',
        catchPhrase: 'You ain\'t gonna believe this shit!',
    },
    {
        name: 'Lipton Ice-T',
        occupation: 'Semi-famous Actor Guy',
        catchPhrase: 'LA is a microcosm of the United States.',
    },
    {
        name: 'Cardigan Backyardigan',
        occupation: 'Got famous making a porn',
        catchPhrase: 'I\'m totally not against plastic surgery. I\'ve tried Botox before. That\'s the only thing that I\'ve done',
    }
];

Celebrities.create(celebrities)
    .then (saveCelebrities => {
        saveCelebrities.forEach(oneCelebrity => 
            console.log(`Celebrity saved: ${oneCelebrity.name}`));
        })
        
    .catch (err => console.log(`Err while saving in the DB: ${err}`));

module.exports = model('Celebrities', celebritiesSchema);