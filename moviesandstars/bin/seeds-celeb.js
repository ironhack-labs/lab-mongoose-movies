
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebmovie-dev');
const Celeb = require('../models/celeb');

const celebs = [

{
celebName : 'Tom',
celebOccup : 'actor',
celebPhrase : 'go for it',
},

{
celebName : 'Toma',
celebOccup : 'actor',
celebPhrase : 'go for ita',
},

{
celebName : 'Tomb',
celebOccup : 'actor',
celebPhrase : 'go for itb',
},

]



Celeb.create(celebs, (err, docs) => {
 if (err) {
   throw err;
 }

 docs.forEach((celeb) => {
   console.log(celeb.celebName)
 });


 mongoose.connection.close();
});
