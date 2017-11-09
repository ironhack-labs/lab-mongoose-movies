const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/celebritiesDB");

const celebrityData = 
 [{
  name: "Bruce", 
  occupation: "actor", 
  catchPhrase: "Life is amazing sometimes"
},
{
  name: "Lucy", 
  occupation: "painter", 
  catchPhrase: "Everybody should give and receive hugs"
},
{
  name: "Jacob", 
  occupation: "musician", 
  catchPhrase: "Boots should be dusty"
}
 ];

 Celebrity.create(celebrityData, function(err, docs){
  if(err){
    console.log(err);
  } else {
    console.log('Celebrityland: ', docs);
  }
  mongoose.disconnect();
});