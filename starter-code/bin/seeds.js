const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'celebritiesAndMovies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();

const celebrities = [{
    name: 'Donald Trump',
    occupation: 'politician',
    catchPhrase: 'I\'ve said if Ivanka weren\'t my daughter, perhaps I\'d be dating her.'
},{
    name: 'Dynamo',
    occupation: 'magician' ,
    catchPhrase: 'Some people think it\'s impossible to change the future...but in reality, the future is only what you make it.'

}, {
    name: 'Ryan Reynolds' ,
    occupation: 'actor' ,
    catchPhrase: 'I\’ll look for the joke in things so that I don\’t look for the sadness and the grief.'
}
];

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });

