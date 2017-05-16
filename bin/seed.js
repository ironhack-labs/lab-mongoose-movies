// Iteration #1
/*jshint esversion:6*/
const celebrity = [
  {
    name: "Jim Carrey" ,
    occupation: "comedian",
    catchPhrase:"ChisSSSpeante"

  },
  {
    name: "HP Lovecraft" ,
    occupation: "Writter",
    catchPhrase:"Cthulhu is coming"

  },
  {
    name: "Eichiro Oda" ,
    occupation: "Mangaka",
    catchPhrase:"Gomu gomu no!"

  }
];
// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebs-data');
const Celebrity = require('../models/celebrity');

// bin/seeds.js
Celebrity.create(celebrity, (err, docs) => {
  if (err) { throw err ;}
  docs.forEach( (celebrity) => {
    console.log(celebrity);
  });
  mongoose.connection.close();
});
