const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ajmovies');

const Celebrity = require('../models/celebrity.js');

const celebrities = [
  {
    name: 'Roberto Pacheco',
    ocupation: "Nasa Engineer",
    catchPhrase: 'The world is not a cirfurence',
    profileImage: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    name: 'Adan Evo',
    ocupation: "Teologist",
    catchPhrase: 'Everyone belivies in apple juice',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
  name: 'Grammy Oscars',
  ocupation: "Oscars giver",
  catchPhrase: 'I deserve one Oscar',
  profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
];
console.log(celebrities);

  // db.celebrities.insertMany()
Celebrity.create(celebrities, (err, celebrityList) => {
  if (err) {
    throw err;
  }

  celebrityList.forEach((oneCelebrity) => {
    console.log(`NEW CELEBRITY ${oneCelebrity.name} -> ${oneCelebrity._id}`);
  });
});
