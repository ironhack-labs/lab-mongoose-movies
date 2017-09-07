const mongoose = require('mongoose');
const Product = require('../models/celebrity');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient:true});


const celebitys=[
  {
    name:"peter grifin",
    occupation:"actor",
    catchPhrase:"Zas en toda la boca!"
  },
  {
    name:"brian",
    occupation:"writter",
    catchPhrase:"Por eso yo no voto."
  } ,
  {
      name:"Stewe",
      occupation:"filmstar",
      catchPhrase:"Maldita sean las entrañas del infierno! "
    }
];

Product.create(celebitys, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.name));
  mongoose.connection.close();
});
