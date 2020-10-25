const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

let celebrities = [
    {
        name: 'Kurt Cobain',
        occupation: 'Musician',
        catchPhrase: 'Smells like teen spirit'
    },
    {
        name: 'Jimi Hendrix',
        occupation: 'Guitarrist',
        catchPhrase: 'Just one more drink'
    },
    {
        name: 'Steve Jobs',
        occupation: 'Dreamer',
        catchPhrase: 'Sky is the limit'
    }];

(async()=>{
    await mongoose.connect(`mongodb://localhost/movies-project`, { useNewUrlParser: true, useUnifiedTopology: true } );
    console.log('DB Connection Established');
    await Celebrity.create(celebrities, (err) => {
        if (err) { throw(err) }
        console.log(`# Created ${celebrities.length} celebrities`);
        mongoose.connection.close();
      });
})();


