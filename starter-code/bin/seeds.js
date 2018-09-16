const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);



const celebrity = [
 {
   name:"Tom Cruise",
   occupation:"actor",
   catchPhrase:"mission is never impossible"
 },

 {
  name:"Arnold",
  occupation:"actor",
  catchPhrase:"I'll be back"
},

{
  name:"Eminem",
  occupation:"singer",
  catchPhrase:"I'm Slamshady"
}

]

Celebrity.create(celebrity,(err) => {
  if(err){throw (err)}
  console.log("Created");
  mongoose.connection.close();
});
