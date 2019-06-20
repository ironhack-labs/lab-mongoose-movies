const mongoose=require('mongoose')
const CelebrityModel = require('../models/celebrity.js'); // Import of the model Recipe from './models/Celebrity'
const data = require('../bin/seed.js');  // Import of the data from './bin/seed.js'

mongoose
  .connect('mongodb://localhost/celebrity-lab', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

//console.log(data)
// CelebrityModel.insertMany(data)
//   .then( (res) =>{ res.forEach( r => console.log(r.title))})
//   .catch( (err) =>{console.log("An error occured during the insertion of many celebrities : ", err)})
  