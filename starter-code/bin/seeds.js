const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);



const celebrity = [
 {
   name:String,
   ocuppation:String,
   catchPhrase:String
 },

 {
  name:String,
  ocuppation:String,
  catchPhrase:String
},

{
  name:String,
  ocuppation:String,
  catchPhrase:String
}

]

Celebrity.create(celebrity,(err) => {
  if(err){throw (err)}
  console.log("Created");
  mongoose.connection.close();
});
