const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/ih-movies', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
});

const Celebrity = require('../models/celebrity');

const celebrityInfo = [
    { name: 'Matthew McCormackhew', 
      occupation: 'farmer', 
      catchPhrase: 'Well, well, well' },
    { name: 'Leonardo DiGrapio', 
      occupation: 'waiter', 
      catchPhrase: 'We should be better than that' },
    { name: 'Nicole Boyman', 
      occupation: 'driver', 
      catchPhrase: 'I dare you, I double dare you' },];

Celebrity.create(celebrityInfo, (err, docs) => {
    if (err) {
        throw err;
    }

    docs.forEach(celebrity => {
        console.log(celebrity.name)
    });

    mongoose.connection.close();
});