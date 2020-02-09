const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose
.connect('mongodb://localhost/movies', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

const celebrityData = [
  {
    name: "Stephen King", 
    occupation: "Writer", 
    catchPhrase: "Get busy living or get busy dying"
  }, 
  {
    name: "Walt Disney", 
    occupation: "Animator", 
    catchPhrase: "All our dreams can come true, if we have the courage to pursue them"
  },
  {
    name: "Jim Carrey", 
    occupation: "Actor", 
    catchPhrase: "My focus is to forget the pain of live. Forget the pain, mock the pain, reduce it. And laugh"
  }
];

mongoose.connect(`mongodb://localhost/movies`)
  .then(() => {
    Celebrity.create(celebrityData)
      .then(celebrities => { 
        console.log('The celebrities have been created and their values ​​are: ', celebrities);
        console.log(`Created ${celebrities.length} celebrities`);
        mongoose.connection.close();
      })
      .catch(err => { console.log('An error happened:', err) });
  })