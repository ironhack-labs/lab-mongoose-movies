const mongoose     = require('mongoose');

mongoose.connect('mongodb://localhost/movies');

const Celebrity = require('../models/celebrity.js');

const celebrities = [
  {
    name: 'Samuel Jackson',
    occupation: "Actor",
    catchPhrase: "I have had it with these motherfucking snakes.",
    imageUrl: "/img/jackson.jpg"
  },
  {
    name: 'John Travolta',
    occupation: "Producer",
    catchPhrase: "You know what they call a Quarter Pounder in Paris?",
    imageUrl: "/img/travolta.jpeg"
  },
  {
    name: 'Morgan Freeman',
    occupation: "Voice Actor",
    catchPhrase: "You sneaky thing you",
    imageUrl: "/img/freeman.jpg"
  }
];

Celebrity.create(celebrities, (err, celebrityDocs) => {
  if(err){
    throw err;
  }

  celebrityDocs.forEach((oneCelebrity) => {
    console.log(`NEW Celebrity ${oneCelebrity.name} -> ${oneCelebrity._id}`);
  });
});
