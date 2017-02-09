const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongooseMovies');
const Product = require('../models/celebrity');

const celebObj = [
  {
		name       		: "Harvey Dent",
		occupation    : "Playa",
		catchPhrase   : "Justice"
  },
  {
		name       		: "Penguin",
		occupation    : "Waddling",
		catchPhrase   : "Come back here"
  },
  {
		name       		: "Pongo",
		occupation    : "Dog",
		catchPhrase   : "Woof much?"
  }
];

Product.create(celebObj, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (fakeCeleb) => {
    console.log(fakeCeleb.name)
  })
  mongoose.connection.close();
});
