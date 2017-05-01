const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ajmovies');

const Celebrity = require('../models/product-model.js');


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


  // db.celebrities.insertMany()
Celebrity.create(celebrities, (err, productDocs) => {
  if (err) {
    throw err;
  }

  productDocs.forEach((oneCelebrity) => {
    console.log(`NEW PRODUCT ${oneCelebrity.name} -> ${oneCelebrity._id}`);
  });
});
