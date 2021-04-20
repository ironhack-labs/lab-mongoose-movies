const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
 
const DB_NAME = 'Express-celebs';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});




const celebrities = [

{
    name: "Xixarito",
    occupation: "Wine-Maker",
    catchPhrase: "La vida es irreal"
},

{
    name: "Lola Flores",
    occupation: "Singer",
    catchPhrase: "Si me queréis, irse"
},

{
    name: "Chiquito",
    occupation: "Comedian",
    catchPhrase: "Jarl"
},

]

Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
 
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities' DB: ${err}`));